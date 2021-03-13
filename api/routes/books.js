const express = require("express");
const router = express.Router();

// book model import
const Book = require("../../models/Book");

// route GET api/books
// get all books
router.get("/", (req, res) => {
  Book.find().then((books) => res.json(books));
});

// @route POST api/book
// @description save new book
router.post("/", (req, res) => {
    console.log("req to add: ", req.body)
  try {
    const newBook = new Book({
      name: req.body.name,
      price: req.body.price,
      author: req.body.author,
    });

    // save item to db
    newBook.save().then((item) => res.json(item));
  } catch (error) {
    console.log("error msg in handling new book:", error);
  }
});

// @route UPDATE api/book
// @description Update a book
router.put("/edit", (req, res) => {
  const book = new Book({
    name: req.body.name,
    price: req.body.price,
    author: req.body.author,
  });
  Book.updateOne({ name: req.body.name }, book)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

// @route DELETE api/book
// @description Delete a book
router.delete("/delete", (req, res) => {
  Book.find({ name: req.body.name }).then((book) =>
    book.remove().then(() => {
      res
        .json({ success: true })
        .catch((err) => res.status(404).json({ message: err }));
    })
  );
});

module.exports = router;
