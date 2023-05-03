import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}
