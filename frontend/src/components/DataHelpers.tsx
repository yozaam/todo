import Button from 'react-bootstrap/Button';

import ItemType from '../types/ItemType';

interface DataHelpersProps {
    items: ItemType[];
    setItems: any;
};

const DataHelpers = ({items, setItems}:DataHelpersProps) => {

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
    console.log(process.env, BACKEND_URL);
    //'http://todo-backend-yvakil-backend.apps.na46.prod.nextcle.com/'; // http://localhost:8000';

    const postToEndpoint = () => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(items)
        };

        fetch(BACKEND_URL, request)
            .then(response => response.json())
            .then(data => console.log(data));
    };

    const getFromEndpoint = () => {
        fetch(BACKEND_URL)
            .then(response => response.json())
            .then(data => setItems(data));
    };

    return (
        <>
            <Button onClick={()=>setItems([])}>Clear All</Button> 
            <Button onClick={()=>postToEndpoint()}>Save to DB</Button> 
            <Button onClick={()=>getFromEndpoint()}>Get from DB</Button>
        </>
    );
};

export default DataHelpers;