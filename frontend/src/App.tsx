import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';
import FilterItems from './components/FilterItems';
import DataHelpers from './components/DataHelpers';

import ItemType from './types/ItemType';
import FilterType from './types/FilterType';

function App() {
  const [newItemText, setNewItemText] = useState<string>("");
  const [items, setItems] = useState<ItemType[]>([]);
  const[itemsCount, setItemsCount] = useState<number>(0);
  
  // does current filter allow this item.status
  const [filter, setFilter] = useState<FilterType>({todo: true, done: true, deleted: false});
  
  const addItemToList = (item:ItemType) => {
    setItems([...items, {text: newItemText, idx: items.length, status: "todo"}]);
    setNewItemText("");
  };

  const editItem = (idx:number, item:ItemType) => {
    let items_edited = [...items];
    items_edited[idx] = item;
    setItems(items_edited);
  };

  return (
    <>
      <h4>press "Enter" to add to list, click item text to toggle</h4>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <InputItem newItemText={newItemText} setNewItemText={setNewItemText} addItemToList={addItemToList}/> {/*Check if 'context' is better suited*/ }
      <DisplayItems filter={filter} items={items} editItem={editItem} setItemsCount={setItemsCount}/>
      <FilterItems setFilter={setFilter}/>
      <h1>Count = {itemsCount}</h1>
      <DataHelpers items={items} setItems={setItems}/>
    </>
  );
}

export default App;
