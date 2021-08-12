import { useState } from "react";
import Button from "react-bootstrap/Button";
import ItemType from '../types/ItemType';

interface InputItemProps {
    items: ItemType[];
    setItems: any;
};

const InputItem = ({items, setItems}:InputItemProps) => {

    const [newItemText, setNewItemText] = useState<string>("");

    const addItemToList = () => {
        setItems([...items, {text: newItemText, idx: items.length, status: "todo"}]);
        setNewItemText("");
    };

    return (
        <>
            <input 
                value={newItemText} 
                onChange={e => setNewItemText(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && addItemToList()} // if "enter"
                type="text" placeholder="Enter your todo"
            />
            <Button onClick={addItemToList}>Add</Button>
        </>
    );
}

export default InputItem;