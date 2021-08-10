import { useState } from 'react';

import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';
import FilterItems from './components/FilterItems';

function App() {
  const [newItemText, setnewItemText] = useState("");
  const [items, setItems] = useState<any[]>([]);
  
  // does current filter allow this item.status
  const [filter, setFilter] = useState({todo: true, done: true, deleted: false});
  
  const addItemToList = (item:any) => {
    setItems([...items, {text: newItemText, idx: items.length, status: "todo"}]);
    setnewItemText("");
  };

  const editItem = (idx:number, item:any) => {
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
      <InputItem newItemText={newItemText} setnewItemText={setnewItemText} addItemToList={addItemToList}/> {/*Check if 'context' is better suited*/ }
      <DisplayItems filter={filter} items={items} editItem={editItem}/>
      <FilterItems setFilter={setFilter}/>
    </>
  );
}

export default App;
