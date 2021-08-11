import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DisplayItem from "./DisplayItem";

const DisplayItems = ({filter, items, editItem, setItemsCount}) => {
    const listItems = items
    .filter((item) => filter[item.status])
    .map((item) => {
        // console.log(item, 'sent to DisplayItem');
        return <DisplayItem key={item.idx} item={item} editItem={editItem} />
    });
    // console.log(listItems);
    setItemsCount(listItems.length);
    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    )
}

export default DisplayItems