import React from "react";
import UserPage from "../UserPage";

const FetchHook = (props) => {
  console.log("propsss", props)
  const id = props.id || "";

  async function fetchData() {
    const response = await fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        price: props.price,
        author: props.author,
        userID: id,
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  fetchData();

  return <div></div>;
};

export default FetchHook;
