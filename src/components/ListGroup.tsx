import { useState } from "react";

interface Props {
  items: string[]; // ie. 'an array of strings'
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // ensures selected item is not the first (which would be 0)

  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
