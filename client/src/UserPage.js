import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FetchHook from "./handlers/FetchHook";

const UserPage = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [books, setBooks] = useState([]);
  const [purchasedBook, setPurchasedBook] = useState([]);
  const [purchasedBookList, setPurchasedBookList] = useState([]);
  const [flag, setFlag] = useState(false);

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

  // get all purchased books
  useEffect(() => {
    const getAllPurchasedBooks = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/purchasedBook/${user.sub}`
        );
        const json = await res.json();
        console.log(json);
        setPurchasedBookList(json);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPurchasedBooks();
  }, [flag]);
  console.log("getAllPurchasedBooks:", purchasedBookList);
  console.log("purchasedBook:", purchasedBook);
  console.log("user:", user);

  // handle book pruchesd
  const handlePurchased = (id, name, price, author) => {
    setPurchasedBook([
      ...purchasedBook,
      {
        id: id,
        name: name,
        price: price,
        author: author,
      },
    ]);
    setFlag(true);
    alert("book bought");
  };

  return (
    <div>
      <h1>Hi {user.name}</h1>
      <button onClick={() => logout()}>Logout</button>
      <h2>My books:</h2>
      <ul>
        {purchasedBookList.map(
          (book) =>
            book.name && (
              <li key={books._id}>
                name: {book.name} author: {book.author} price: {book.price}{" "}
              </li>
            )
        )}
        {flag &&
          purchasedBook.map(
            (book) =>
              book.name && (
                <li key={books._id}>
                  name: {book.name} author: {book.author} price: {book.price}{" "}
                </li>
              )
          )}
      </ul>
      <h2>Available books to buy:</h2>
      <ul>
        {books.map((book) => (
          <li key={books._id}>
            name: {book.name} author: {book.author} price: {book.price}
            <button
              onClick={() =>
                handlePurchased(book._id, book.name, book.price, book.author)
              }
            >
              Buy book!
            </button>
          </li>
        ))}
      </ul>
      {flag && (
        <FetchHook
          name={purchasedBook[purchasedBook.length - 1].name}
          id={user.sub}
          price={purchasedBook[purchasedBook.length - 1].price}
          author={purchasedBook[purchasedBook.length - 1].author}
          url="http://localhost:5000/api/purchasedBook"
          method="POST"
        />
      )}
    </div>
  );
};
export default UserPage;
