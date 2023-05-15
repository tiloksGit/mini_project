const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUsers);

module.exports = router;


