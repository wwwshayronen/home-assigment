const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Book schema
const BookSchema = new Schema({
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
});

module.exports = Books = mongoose.model("book", BookSchema);
