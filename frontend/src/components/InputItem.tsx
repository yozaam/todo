import { useState } from "react";
import Button from "react-bootstrap/Button";

const InputItem = ({ addItemToList }) => {

    const [newItemText, setNewItemText] = useState<string>("");

    const addItemToListAndClearInput = () => {
        addItemToList(newItemText);
        setNewItemText("");
    };

    return (
        <>
            <input 
                value={newItemText} 
                onChange={e => setNewItemText(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && addItemToListAndClearInput()} // if "enter"
                type="text" placeholder="Enter your todo"
            />
            <Button onClick={addItemToListAndClearInput}>Add</Button>
        </>
    );
}

export default InputItem;