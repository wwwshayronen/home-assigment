import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserPage from "./UserPage";
import { Router } from "react-router-dom";
import BookList from "./BookList";
import { Button } from "antd";
import AdminPanel from "./AdminPanel";

function App() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  if (isAuthenticated && user.nickname !== "admin") {
    return <UserPage />;
  }

  if (isAuthenticated && user.nickname === "admin") {
    return <AdminPanel />;
  }

  console.log("user", user);

  return (
    <>
      <h1>Book store</h1>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
      <BookList />
    </>
  );
}

export default App;
