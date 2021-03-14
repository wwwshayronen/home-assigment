import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "../node_modules/antd/dist/antd.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-4yd2ovr5.auth0.com"
    clientId="ZmYbptlyhQEOsSUde0h6E284VGvgtZoN"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
