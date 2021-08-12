const services = {
    postToEndpoint : (BACKEND_URL, items) => {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(items)
        };

        fetch(BACKEND_URL, request)
            .then(response => response.json())
            .then(data => console.log(data));
    },

    getFromEndpoint : (BACKEND_URL, setItems) => {
        fetch(BACKEND_URL)
            .then(response => response.json())
            .then(data => setItems(data));
    }
};

export default services;