const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Purchased Book schema
const PurchasedBookSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
});

module.exports = PurchasedBook = mongoose.model("purchasedBook", PurchasedBookSchema);

