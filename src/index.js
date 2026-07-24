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

import React from "react"; //! 1 - React-елементи
import ReactDOM from "react-dom/client"; //! 2 - Render React-елемента
// import { Fragment } from "react";
import paintings from "./json/painting.json";
console.log("paintings:", paintings);
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
// const elem1 = React.createElement("span", { children: "Привіт " });
// const elem2 = React.createElement("span", { children: "світ!" });
//todo: Each child in a list should have a unique "key" prop
// const elem1 = React.createElement("span", { key: "elem-1", children: "Привіт " });
// const elem2 = React.createElement("span", { key: "elem-2", children: "світ!" });

// console.log("elem1:",elem1);
// console.log("elem2:",elem2);

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   // children: ["Привіт ", " ", "світ!"]
//   children: [elem1, " ", elem2]
// });
// console.log("element:", element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//! 4 - Рендер JSX-елемента (XML-образний синтаксис)
// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: "Привіт, світ!",
// });

// console.log("element:", element);

// const jsxElement = <div>Привіт, мій світ</div>
// console.log("jsxElement:", jsxElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// root.render(jsxElement);

//! 5 - Рендер Вкладених JSX-елементів (інтерполяція)
// const elem1 = <span>Привіт </span>;
// const elem2 = <span>світ!</span>;

// console.log("elem1:", elem1);
// console.log("elem2:", elem2);

// //  const element = (
// //   <Fragment>
// //     {elem1}
// //     {elem2}
// //   </Fragment>
// // );
// const element = (
//   <>
//     {elem1}
//     {elem2}
//   </>
// );
// console.log("element:", element);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//! 6.1 - Компонент `Painting`
// * HTML-розмітка:
// <div>
//   <img src="" alt="" width="480" />
//   <h2></h2>
//   <p>Автор: <a href=""></a></p>
//   <p>Цена: кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Додати до кошику</button>
// </div>
let data = {
  "id": "id-1",
  "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  "title": "Feathers. Art abstract",
  "price": 500,
  "author": {
    "tag": "ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
  },
  "quantity": 10
};
// data = paintings[0]

// const data1 = paintings[0]
// const data2 = paintings[1]
// const data3 = paintings[2]

// let painting1 = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность:{data.quantity} заканчивается или есть в наличии</p>
//     <button type="button">Додати до кошику</button>
//   </div>

// );
// let painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>
//       Автор: <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Цена: {data2.price} кредитов</p>
//     <p>Доступность:{data2.quantity} заканчивается или есть в наличии</p>
//     <button type="button">Додати до кошику</button>
//   </div>

// );
// let painting3 = (
//   <div>
//     <img src={data3.url} alt={data3.title} width="480" />
//     <h2>{data3.title}</h2>
//     <p>
//       Автор: <a href={data3.author.url}>{data3.author.tag}</a>
//     </p>
//     <p>Цена: {data3.price} кредитов</p>
//     <p>Доступность:{data3.quantity} заканчивается или есть в наличии</p>
//     <button type="button">Додати до кошику</button>
//   </div>

// );

// const element = (
//   <>
//   {painting1}
//   {painting2}
//   {painting3}
//   </>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

//! 6.4 КОМПОНЕНТ - функція з даними на вході та розміткою на виході
// //? ❗️❗️❗️ Ім'я функції має бути ОБОВ'ЯЗКОВО з Великої літери ❗️❗️❗️
function Painting(props) {
  console.log("props:",props);
  return (
    <div>
      <img src={props.dataObj.url} alt={props.dataObj.title} width="480" />
      <h2>{props.dataObj.title}</h2>
      <p>
        Автор: <a href={props.dataObj.author.url}>{props.dataObj.author.tag}</a>
      </p>
      <p>Цена:{props.dataObj.price}  кредитов</p>
      <p>Доступность:{props.dataObj.quantity} заканчивается или есть в наличии</p>
      <button type="button">Додати до кошику</button>
    </div>
  );
}

 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Painting dataObj = {data} />)