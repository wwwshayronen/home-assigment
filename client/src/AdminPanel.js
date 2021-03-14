import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import FetchHook from "./handlers/FetchHook";
import BookList from "./BookList";

const AdminPanel = () => {
  const [newBook, setNewBook] = useState([]);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmitBook = () => {
    setNewBook([
      ...newBook,
      {
        bookName: bookName,
        bookAuthor: bookAuthor,
        bookPrice: bookPrice,
      },
    ]);
    setFlag(true)
    alert("book added")
  };


  return (
    <div>
        <h1>Hi, Admin</h1>
      <h1>Add new book:</h1>
      <Form style={{width: "35%", marginLeft: "auto", marginRight: "auto"}} >
        <label>book name:</label>
        <Input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <label>book author:</label>
        <Input
          type="text"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        />
        <label>book price:</label>
        <Input
          type="number"
          value={bookPrice}
          onChange={(e) => setBookPrice(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmitBook}>Submit</Button>
      </Form>
      {flag && (
        <FetchHook
          name={newBook[newBook.length - 1].name}
          price={newBook[newBook.length - 1].price}
          author={newBook[newBook.length - 1].author}
          url="http://localhost:5000/api/books"
          method="POST"
        />
      )}
        <h1>book list:</h1>
      <BookList />
    </div>
  );
};

export default AdminPanel;