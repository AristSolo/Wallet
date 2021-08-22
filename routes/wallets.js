const express = require("express");

const router = express.Router();
const {walletController} = require("../controllers");

// Register Wallet
router.post("/register", (req, res) => {
  walletController.saveWallet(req.body, (err, wallet) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(wallet);
    }
  });
});
//
// Update Wallet
router.patch("/update", (req, res) => {
  walletController.updateWallet(req.body, (err, wallet) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(wallet);
    }
  });
});
//
// get wallet records for a specific user
router.get("/transactions/:userId", (req, res) => {
  walletController.getUserTransactions(req.params.userId, (err, transcations) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(transcations);
    }
  });
});

router.get("/walletBalance/:userId", (req, res) => {
  walletController.getWalletBalances(req.params.userId, (err, transcations) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(transcations);
    }
  });
});

module.exports = router;