import { ButtonGroup, Button }  from 'react-bootstrap';

import ItemType from '../types/ItemType';

interface DataHelpersProps {
    items: ItemType[];
    setItems: any;
    services: any;
};

const DataHelpers = ({items, setItems, services}:DataHelpersProps) => {

    let BACKEND_URL:string = process.env.REACT_APP_BACKEND_URL || 'localhost:8000';
    // console.log(process.env, BACKEND_URL);
    BACKEND_URL = 'http://' + BACKEND_URL;
    //'http://todo-backend-yvakil-backend.apps.na46.prod.nextcle.com/'; // http://localhost:8000';

    return (
        <div>
            <ButtonGroup>
                <Button onClick={()=>setItems([])}>Clear All</Button> 
                <Button onClick={()=>services.postToEndpoint(BACKEND_URL, items)}>Save to DB</Button> 
                <Button onClick={()=>services.getFromEndpoint(BACKEND_URL, setItems)}>Get from DB</Button>
            </ButtonGroup>
        </div>
    );
};

export default DataHelpers;