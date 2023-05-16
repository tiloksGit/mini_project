const express = require("express");
const router = express.Router();
const multer = require("multer");
const registerController = require("../Controller/registerController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./avatar");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("img"), registerController.createNewUser);

module.exports = router;
