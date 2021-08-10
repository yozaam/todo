import { ButtonGroup, Button } from "react-bootstrap"

const FilterItems  = ({ setFilter }) => {
    return (
        <ButtonGroup>
            <Button 
                onClick={
                () => { 
                    setFilter({todo: true, done: true, deleted: false}) 
                } 
                }> 
                All
            </Button>

            <Button 
                onClick={
                () => { 
                    setFilter({todo: true, done: false, deleted: false}) 
                } 
                }> 
                Todo
            </Button>

            <Button 
                onClick={
                () => { 
                    setFilter({todo: false, done: true, deleted: false}) 
                } 
                }> 
                Done
            </Button>
        </ButtonGroup>    
    );
}

export default FilterItems