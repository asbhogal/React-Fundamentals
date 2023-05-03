export default function ListGroup() {
  const items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];

  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
