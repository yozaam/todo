import React from "react";
import { InputGroup, ListGroupItem, Button, Row, Col} from "react-bootstrap";
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
    return (
        <ListGroupItem>
            <Row>
                <span style={{width:"fit-content"}} onClick={toggleStatus}>
                    <InputGroup.Checkbox type="checkbox" checked={item.status === 'done'} />
                </span>
                <Col onClick={toggleStatus}> 
                    {itemText} 
                </Col>
                <Col > 
                    <Button onClick={deleteItem}> Delete </Button> 
                </Col>
            </Row>
        </ListGroupItem>
    );
}

export default DisplayItem;