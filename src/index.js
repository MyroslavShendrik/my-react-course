// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'; //! 1 - React-елементи
import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента



//! 1 - React-елементи
//* document.createElement("div"); //* JS
// const element = React.createElement("div");
// const element = React.createElement("div", { a: 5, b: 10 });
// const element = React.createElement("div", { a: 5, b: 10 }, "Привіт  світ!");
// const element = React.createElement(
//   "div",
//   { a: 5, b: 10 },
//   "Привіт ",
//   " ",
//   "світ!"
// );

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: ["Привіт ", " ", "світ!"]
// });


// console.log("element:", element);

//! 2 - Рендер одного React-елемента
//* root.append(element) //* JS
//? ReactDOM.createRoot(document.getElementById('root')).render(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//! 3 - Рендер кількох React-елементів
const elem1 = React.createElement("span", { children: "Привіт " });
const elem2 = React.createElement("span", { children: "світ!" });
console.log("elem1:",elem1);
console.log("elem2:",elem2);

const element = React.createElement("div", {
  a: 5,
  b: 10,
  // children: ["Привіт ", " ", "світ!"]
  children: [elem1, " ", elem2]
});
console.log("element:", element);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);