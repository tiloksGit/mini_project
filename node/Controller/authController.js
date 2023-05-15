/*const bcrypt = require("bcrypt");
const usersDB = require("../models/users.json");

const handleAuth = async (req, res) => {
  const { user, passwd } = req.body;
  if (!user || !passwd)
    return res.status(400).json({ message: "Incomplete information" });
  const userExists = usersDB.find((person) => person.username === user);
  if (!userExists) return res.status(401).json({ message: "No user Found" });
  try {
    const passwdTrue = await bcrypt.compare(passwd, userExists.password);
    console.log(passwdTrue);
    if (!passwdTrue) return res.status(401).json({ message: "No user Found" });
    return res.status(200).json({ message: "User authenticated" });
  } catch (err) {
    res.status(500).json({ message: "ServerError" });
  }
};

*/

//mongodb connection

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const handleAuth = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  //confirm data
  if (!username || !password) {
    return res.status(400).json({ message: " All fields are required" });
  }

  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.status(400).json({ message: "No user found" });
  }
  const correctPasswd = await bcrypt.compare(password, user.password);

  if (!correctPasswd) {
    return res.status(400).json({ message: "Invalid Username or Password" });
  }

  res.status(200).json({ name: user.username, books: user.books_bought });
});

module.exports = { handleAuth };
