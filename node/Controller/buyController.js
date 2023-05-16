const asyncHandler = require("express-async-handler");
const Book = require("../models/Book");
const User = require("../models/User");

const buyBook = asyncHandler(async (req, res) => {
  const { username, bId } = req.body;
  if (!username || !bId) {
    return res.status(404).json({ message: "all fields required" });
  }

  const user = await User.findOne({ username }).exec();
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }

  if (!user.books_bought) {
    user.booksBought = [];
  }

  await user.booksBought.push({ bookId: bId });
  user.booksCount = user.booksCount + 1;
  const updatedUser = await user.save();
  console.log(updatedUser);

  res.status(200).json({ books: updatedUser.booksBought });
});

module.exports = { buyBook };
