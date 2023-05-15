const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleUser = async (req, res) => {
  const user = req.body.user;
  const passwd = req.body.passwd;
  if (!user || !passwd)
    return res
      .status(400)
      .json({ message: "username and password are required" });
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409);
  try {
    const hashedPasswd = await bcrypt.hash(passwd, 10);
    //Store the newUser
    const newUser = { username: user, password: hashedPasswd };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    res.status(201).json({ message: `newUser ${newUser.username} created` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { handleUser };

