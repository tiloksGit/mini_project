const express = require("express");
const router = express.Router();
const booksController = require("../Controller/booksController");

router
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.getNewBooks)
  .delete(booksController.deleteBooks);

router.route("/:id").get(booksController.getBooks);

module.exports = router;
