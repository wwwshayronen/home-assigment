const express = require("express");
const router = express.Router();

// PurchasedBook model

const PurchasedBook = require("../../models/PurchasedBook");

// @route GET api/PurchasedBook
// @description Get all PurchasedBook by id
router.get("/:userID", (req, res) => {
  console.log("req:", req.params);
  const id = req.params.userID;
  PurchasedBook.find({ userID: id })
    .sort({ date: -1 })
    .then((purchasedBook) => res.json(purchasedBook));
});

// @route POST api/PurchasedBook
// @description save new PurchasedBook
router.post("/", (req, res) => {
  try {
    console.log("request was received by the server:", req.body);
    const newPurchasedBook = new PurchasedBook({
      name: req.body.name,
      price: req.body.price,
      author: req.body.author,
      userID: req.body.userID,
    });

    // save item to db
    newPurchasedBook.save().then((item) => res.json(item));
  } catch (error) {
    console.log("error msg in handling post req:", error);
  }
});

module.exports = router;
