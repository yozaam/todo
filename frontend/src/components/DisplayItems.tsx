import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FilterType from "../types/FilterType";
import ItemType from "../types/ItemType";
import DisplayItem from "./DisplayItem";

interface DisplayItemsProps {
    filter: FilterType;
    items: ItemType[];
    editItem: any;
    setItemsCount: any;
};

const DisplayItems = ({filter, items, editItem, setItemsCount}:DisplayItemsProps) => {
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