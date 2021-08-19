import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FilterType from "../types/FilterType";
import ItemType from "../types/ItemType";
import DisplayItem from "./DisplayItem";

interface DisplayItemsProps {
    filter: FilterType;
    items: ItemType[];
    editItem: any;
};

const DisplayItems: React.FC<DisplayItemsProps> = ({filter, items, editItem}) => {
    const listItems = items
    .filter((item) => filter[item.status])
    .map((item) => {
        return <DisplayItem key={item.idx} item={item} editItem={editItem} />
    });
    return (
        <>
            <ListGroup>
                {listItems}
            </ListGroup>
            <h4>Count = {listItems.length}</h4>
        </>
    )
}

export default DisplayItems