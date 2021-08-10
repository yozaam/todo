import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const [filter, setFilter] = useState({todo: false, done: false, deleted: true});
  
  const addItemToList = (item:any) => {
    setItems([...items, {text: newItem, idx: items.length, status: "todo"}]);
  };

  const editItem = (idx, item:any) => {
    let items_edited = [...items];
    items_edited[idx] = item;
    setItems(items_edited);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <InputItem newItem={newItem} setNewItem={setNewItem} addItemToList={addItemToList}/> {/*Check if 'context' is better suited*/ }
      <DisplayItems filter={filter} items={items} editItem={editItem}/>
    </>
  );
}

export default App;
