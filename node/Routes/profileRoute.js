const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.route("/").post(userController.getAllUsers);

module.exports = router;
