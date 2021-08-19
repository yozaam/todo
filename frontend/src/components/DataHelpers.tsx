import { ButtonGroup, Button }  from 'react-bootstrap';

const BACKEND_URL = `http://${process.env.REACT_APP_BACKEND_URL || 'localhost:8000'}`;

interface DataHelpersProps {
    onClear: any;
    onGet: any;
    onPost:any;
};

const DataHelpers: React.FC<DataHelpersProps> = ({onClear, onGet, onPost}) => {
    return (
        <div>
            <ButtonGroup>
                <Button onClick={onClear}>Clear All</Button> 
                <Button onClick={()=>onPost(BACKEND_URL)}>Save to DB</Button> 
                <Button onClick={()=>onGet(BACKEND_URL)}>Get from DB</Button>
            </ButtonGroup>
        </div>
    );
};

export default DataHelpers;