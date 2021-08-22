const express = require("express");

const router = express.Router();
const {businessController} = require("../controllers");

// Register Business
router.post("/register", (req, res) => {
  businessController.saveBusiness(req.body, (err, business) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(business);
    }
  });
});

module.exports = router;