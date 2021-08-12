import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import DisplayItems from './components/DisplayItems';
import FilterItems from './components/FilterItems';
import DataHelpers from './components/DataHelpers';

import ItemType from './types/ItemType';
import FilterType from './types/FilterType';

import services from './services.js';

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  
  // does current filter allow this item.status
  const [filter, setFilter] = useState<FilterType>({todo: true, done: true, deleted: false});

  const editItem = (idx:number, item:ItemType) => {
    let items_edited = [...items];
    items_edited[idx] = item;
    setItems(items_edited);
  };

  return (
    <>
      <h4>press "Enter" to add to list, click item text to toggle</h4>
      <InputItem items={items} setItems={setItems}/> {/*Check if 'context' is better suited*/ }
      <DisplayItems filter={filter} items={items} editItem={editItem}/>
      <FilterItems setFilter={setFilter}/> 
      <DataHelpers items={items} setItems={setItems} services={services}/>
    </>
  );
}

export default App;
