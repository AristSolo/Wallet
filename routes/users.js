const express = require("express");

const router = express.Router();
const {usersController} = require("../controllers");

// Register User
router.post("/register", (req, res) => {
  usersController.saveUser(req.body, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(user);
    }
  });
});

module.exports = router;