import Button from 'react-bootstrap/Button';

const DataHelpers = ({items, setItems}) => {

    const postToEndpoint = () => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        };

        fetch('BACKEND_URL', request)
            .then(response => response.json())
            .then(data => console.log(data));
    };

    const getFromEndpoint = () => {
        fetch('BACKEND_URL')
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