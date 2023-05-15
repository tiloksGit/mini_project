const express = require("express");
const router = express.Router();
const buyController = require("../Controller/buyController");

router.route("/").post(buyController.buyBook);

module.exports = router;
