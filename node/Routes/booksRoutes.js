const express = require("express");
const router = express.Router();
const booksController = require("../Controller/booksController");
const verifyJWT = require("../middleware/verifyJWT");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./bookThumbnail");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router
  .route("/")
  .get(booksController.getAllBooks)
  .post(verifyJWT, upload.single("img"), booksController.postNewBooks)
  .delete(verifyJWT, booksController.deleteBooks);

router.route("/:id").get(booksController.getBooks);

module.exports = router;
