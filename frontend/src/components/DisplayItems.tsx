import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DisplayItem from "./DisplayItem";

const DisplayItems = ({filter, items, editItem}) => {
    const listItems = items.map((item) => {
        // filter[item.status] || 
        <DisplayItem item={item} filter={filter} editItem={editItem} /> 
    });

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    )
}

export default DisplayItems