import Button from "react-bootstrap/Button";

interface InputItemProps {
    newItemText: string;
    setNewItemText: any;
    addItemToList: any;
};

const InputItem = ({newItemText, setNewItemText, addItemToList}:InputItemProps) => {
    return (
        <>
            <input 
                value={newItemText} 
                onChange={e => setNewItemText(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && addItemToList()} // if "enter"
                type="text" placeholder="Enter your todo"
            />
            <Button onClick={addItemToList}>Add</Button>
        </>
    );
}

export default InputItem;