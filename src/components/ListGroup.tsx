export default function ListGroup() {
  let items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];
  items = [];

  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
