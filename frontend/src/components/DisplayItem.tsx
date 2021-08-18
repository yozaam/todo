import React from "react";
import {ListGroupItem, Button, Row, Col} from "react-bootstrap";
import ItemType from "../types/ItemType";

interface DisplayItemProps {
    item: ItemType;
    editItem: any;
};

const DisplayItem = ({item, editItem}:DisplayItemProps) => {

    const toggleStatus = () => {
        let newStatus:string = '';
        if (item.status === 'done') newStatus = 'todo';
        else if (item.status === 'todo') newStatus = 'done';
        editItem(item.idx, {...item, status: newStatus});
    };

    const deleteItem = () => {
        editItem(item.idx, {...item, status: 'deleted'});
    };

    let itemText:any = item.text;
    if (item.status === 'done') {
        itemText = <s data-testid="strikethrough">{item.text}</s>;
    }
    // console.log(item, 'itemText:', itemText);
    return (
        <ListGroupItem>
            <Row>
                <Col md="8" onClick={toggleStatus}> 
                    {itemText} 
                </Col>
                <Col md="4"> 
                    <Button onClick={deleteItem}> Delete </Button> 
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default DisplayItem;