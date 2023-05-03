import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

export default function App() {
  const items = ["London", "Paris", "New York", "Rome", "Berlin", "Moscow"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>Test alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Test
      </Button>
    </div>
  );
}
