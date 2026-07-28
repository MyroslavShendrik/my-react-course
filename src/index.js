import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import paintings from "./json/painting.json";

//! Створюємо Головний компонент всього застосунку - App.js
const painting = paintings[0];
// const painting = paintings[1]
// const painting = paintings[2]

const root = ReactDOM.createRoot(document.getElementById("root"));
//todo: В index.js ми раендеримо тільки <App />❗️❗️❗️
root.render(
  <App
    url={painting.url}
    title={painting.title}
    author={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
    quantity={painting.quantity}
  />,
);
