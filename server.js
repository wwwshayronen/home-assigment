require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const books = require("./api/routes/books");
const purchasedBooks = require("./api/routes/purchasedBook")

// allow access to api
app.use(cors({ origin: "http://localhost:3000" }));

// Body-parser middleware
app.use(bodyParser.json());

// DB config
const db = process.env.DB_URI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected"))
  .catch((err) =>
    console.log("Error when trying to connect to mongodb: ", err)
  );

// use routes
app.use("/api/books", books);
app.use("/api/purchasedBook", purchasedBooks)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
