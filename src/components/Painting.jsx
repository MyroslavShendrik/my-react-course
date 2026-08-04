export default function Painting({
  url,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) {
    return (
      <div>
        <img src={url} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
          Автор: <a href={profileUrl}>{author}</a>
        </p>
        <p>Цена:{price} кредитов</p>
        <p>Доступность:{quantity} заканчивается или есть в наличии</p>
        <button type="button">Додати до кошику</button>
      </div>
      
    );
}