import Button from "react-bootstrap/Button";

const InputItem = ({newItemText, setnewItemText, addItemToList}) => {
    return (
        <>
            <input 
                value={newItemText} 
                onChange={e => setnewItemText(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && addItemToList()} // if "enter"
                type="text" placeholder="Enter your todo"
            />
            <Button onClick={addItemToList}></Button>
        </>
    );
}

export default InputItem;