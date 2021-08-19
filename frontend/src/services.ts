import ItemType from "./types/ItemType";

const BACKEND_URL:string = `http://${process.env.REACT_APP_BACKEND_URL || 'localhost:8000'}`;

const services = {
    postToEndpoint : (items:ItemType[]) => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(items)
        };

        fetch(BACKEND_URL, request)
            .then(response => response.json())
            .then(data => console.log(data));
    },

    getFromEndpoint : (setItems) => {
        fetch(BACKEND_URL)
            .then(response => response.json())
            .then(data => setItems(data));
    }
};

export default services;