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

const element = React.createElement("div", {
  a: 5,
  b: 10,
  children: ["Привіт ", " ", "світ!"]
});


console.log("element:", element);

//! 2 - Рендер одного React-елемента
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
