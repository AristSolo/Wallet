const express = require("express");

const router = express.Router();
const {walletController} = require("../controllers");

// Register Business
router.post("/register", (req, res) => {
  walletController.saveWallet(req.body, (err, wallet) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(wallet);
    }
  });
});

module.exports = router;