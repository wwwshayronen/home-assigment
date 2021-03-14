import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // get all books
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/books/`);
        const json = await res.json();
        console.log(json);
        setBooks(json);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, []);
  console.log("list of aviable books:", books);

  return (
    <ul>
      {books.map((book) => (
        <li key={books._id}>
          name: {book.name} author: {book.author} price: {book.price}
        </li>
      ))}
    </ul>
  );
};

export default BookList;