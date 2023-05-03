import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
