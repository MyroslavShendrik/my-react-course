import Painting from "./Painting.jsx";
import paintings from "../json/painting.json";
console.log("paintings:", paintings);
// const painting = paintings[2]

export default function App({
  url,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) {
  // console.log(url, title, profileUrl, author, price, quantity)
  // function Painting({ url, title, profileUrl, author, price, quantity }) {
  //   return (
  //     <div>
  //       <img src={url} alt={title} width="480" />
  //       <h2>{title}</h2>
  //       <p>
  //         Автор: <a href={profileUrl}>{author}</a>
  //       </p>
  //       <p>Цена:{price} кредитов</p>
  //       <p>Доступность:{quantity} заканчивается или есть в наличии</p>
  //       <button type="button">Додати до кошику</button>
  //     </div>
  //   );
  // }
  return (
    <>
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />
      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />
      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />
    </>
  );
}
