import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';
import FilterItems from './components/FilterItems';
import DataHelpers from './components/DataHelpers';

import ItemType from './types/ItemType';
import FilterType from './types/FilterType';

import services from './services.js';

// TODO: is this the right place to declare this constant?
let BACKEND_URL:string = process.env.REACT_APP_BACKEND_URL || 'localhost:8000';
// console.log(process.env, BACKEND_URL);
BACKEND_URL = 'http://' + BACKEND_URL;
//'http://todo-backend-yvakil-backend.apps.na46.prod.nextcle.com/'; // http://localhost:8000';

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  
  // does current filter allow this item.status
  const [filter, setFilter] = useState<FilterType>({todo: true, done: true, deleted: false});

  const editItem = (idx:number, item:ItemType) => {
    let items_edited = [...items];
    items_edited[idx] = item;
    setItems(items_edited);
  };

  const addItemToList = (newItemText:string) => {
    setItems([...items, {text: newItemText, idx: items.length, status: "todo"}]);
    return true;
  };

  return (
    <>
      <h1>Todo App</h1>
      <h6>Shortcuts: "Enter" to add, click item text to toggle</h6><br/>
      <InputItem addItemToList={addItemToList}/> {/*Check if 'context' is better suited*/ }
      <DisplayItems filter={filter} items={items} editItem={editItem}/>
      <FilterItems setFilter={setFilter}/> 
      <DataHelpers
          onClear={() => setItems([])}
          onPost={() => services.postToEndpoint(BACKEND_URL, items)}
          onGet={() => services.getFromEndpoint(BACKEND_URL, setItems)}
      />    
    </>
  );
}

export default App;
