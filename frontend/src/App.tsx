import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';
import FilterItems from './components/FilterItems';
import DataHelpers from './components/DataHelpers';

import ItemType from './types/ItemType';
import FilterType from './types/FilterType';

import services from './services';

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
          onPost={() => services.postToEndpoint(items)}
          onGet={() => services.getFromEndpoint(setItems)}
      />    
    </>
  );
}

export default App;
