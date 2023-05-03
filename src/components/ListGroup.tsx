import { useState } from "react";

export default function ListGroup() {
  const items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];

  const [selectedIndex, setSelectedIndex] = useState(-1); // ensures selected item is not the first (which would be 0)

  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => (setSelectedIndex(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
