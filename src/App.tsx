import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import React from 'react'

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return <div>
//     <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
//     </div>
// }

function App() {
  const [alertVisisble, setAlertVisibilty] = useState(false);
  return (
    <div>
      { alertVisisble && <Alert onClose ={ () => setAlertVisibilty(false) } >My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibilty(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
