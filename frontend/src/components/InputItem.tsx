import React from "react";
import Button from "react-bootstrap/Button";

const InputItem = ({newItem, setNewItem, addItemToList}) => {
    return (
        <>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" placeholder="Enter your todo"/>
            <Button onClick={addItemToList}></Button>
        </>
    );
}

export default InputItem;