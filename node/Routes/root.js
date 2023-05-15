const express = require("express");
const router = express.Router();
const path = require("path");
const { route } = require("./register");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Views", "index.html"));
});

module.exports = router;

