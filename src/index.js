import React from "react";
import ReactDOM from "react-dom/client";

import { ConfigProvider } from "./contexts/config.context";
import { PostsProvider } from "./contexts/posts.context";

import Router from "./Router";

import "./styles/reset.css";
import "./styles/main.css";
import "./styles/constants.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </ConfigProvider>
  </React.StrictMode>
);
