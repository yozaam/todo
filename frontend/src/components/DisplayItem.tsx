import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const DisplayItem = ({filter, item, editItem}) => {

    const toggleStatus = () => {
         
    };

    if (filter[item.status] === true) {
        // we need to filter out this element
        return ;
    } else { 
        let itemText = item.text;
        if (item.status == 'done') {
            itemText = '<strike>' + item.text + '</strike>';
        }
        return (
            <ListGroupItem key={item.idx} onClick={toggleStatus()}>
                {itemText}
            </ListGroupItem>
        );
     }
}