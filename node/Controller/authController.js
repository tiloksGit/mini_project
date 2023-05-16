const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleAuth = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //confirm data
  if (!username || !password) {
    return res.status(400).json({ message: " All fields are required" });
  }

  const user = await User.findOne({ username }).select("+password").lean();

  if (!user) {
    return res.status(400).json({ message: "No user found" });
  }
  const match = await bcrypt.compare(password, user.password);

  console.log(match);
  if (!match) {
    return res.status(400).json({ message: "Invalid Username or Password" });
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: user.username,
        branch: user.branch,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    {
      username: user.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ accessToken, id: user._id, username: user.username });
});

const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return err.status(403).json({ message: "forbidden" });
      const user = await User.findOne({ username: decoded.username });

      if (!user) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: user.username,
            branch: user.branch,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      res.json({ accessToken });
    })
  );
});

const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204).json("jwt cookie not found");
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "You are logged out" });
});

module.exports = { handleAuth, refresh, logout };
