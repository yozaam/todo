import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const DisplayItem = ({item, editItem}) => {

    const toggleStatus = () => {
        let newStatus = '';
        if (item.status === 'done') newStatus = 'todo';
        else if (item.status === 'todo') newStatus = 'done';
        editItem(item.idx, {...item, status: newStatus});
    };

    let itemText = item.text;
    if (item.status === 'done') {
        itemText = <del>{item.text}</del>;
    }
    console.log(item, 'itemText:', itemText);
    return (
        <ListGroupItem onClick={toggleStatus}>
            {itemText}
        </ListGroupItem>
    );
}

export default DisplayItem;