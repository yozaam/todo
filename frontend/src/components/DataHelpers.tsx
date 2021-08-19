import { ButtonGroup, Button }  from 'react-bootstrap';

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
                <Button onClick={onPost}>Save to DB</Button> 
                <Button onClick={onGet}>Get from DB</Button>
            </ButtonGroup>
        </div>
    );
};

export default DataHelpers;