const express = require("express");
const router = express.Router();
const registerController = require("../Controller/registerController");

router.post("/", registerController.handleUser);

module.exports = router;


