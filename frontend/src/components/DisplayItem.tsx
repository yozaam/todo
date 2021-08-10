import React from "react";
import {ListGroupItem, Button, Row, Col} from "react-bootstrap";

const DisplayItem = ({item, editItem}) => {

    const toggleStatus = () => {
        let newStatus = '';
        if (item.status === 'done') newStatus = 'todo';
        else if (item.status === 'todo') newStatus = 'done';
        editItem(item.idx, {...item, status: newStatus});
    };

    const deleteItem = () => {
        editItem(item.idx, {...item, status: 'deleted'});
    };

    let itemText = item.text;
    if (item.status === 'done') {
        itemText = <s>{item.text}</s>;
    }
    // console.log(item, 'itemText:', itemText);
    return (
        <ListGroupItem>
            <Row>
                <Col md="8" onClick={toggleStatus}> 
                    {itemText} 
                </Col>
                <Col md="4"> <Button onClick={deleteItem}> Delete </Button> </Col>
            </Row>
        </ListGroupItem>
    );
}

export default DisplayItem;