import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { setAuthorizationHeader } from "./api/client";
import storage from "./utils/storage";
import "./i18n/index";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App isInitiallyLogged={!!accessToken} />
    </BrowserRouter>
  </React.StrictMode>
);
