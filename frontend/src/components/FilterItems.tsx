import { ToggleButtonGroup, ToggleButton } from "react-bootstrap"

const FilterItems  = ({ setFilter }) => {    
    
    const setFilterStatus = (filterStatus:string) => {
        switch (filterStatus) {
            case 'all':
                setFilter({todo: true, done: true, deleted: false});
                break;
            case 'todo':
                setFilter({todo: true, done: false, deleted: false});
                break;
            case 'done':
                setFilter({todo: false, done: true, deleted: false});
                break;
        }
    }; 

    return (
        <div>
            {/* Letting React Bootstrap handle the state and values for selected / unselected */}
            <ToggleButtonGroup name="radio" type="radio" defaultValue="all" onChange={(e) => setFilterStatus(e)}>
                <ToggleButton value="all" name="radio" id='all'> 
                    All
                </ToggleButton>

                <ToggleButton value="todo" name="radio" id='todo'>
                    Todo
                </ToggleButton >

                <ToggleButton value="done" name="radio" id='done'>
                    Done
                </ToggleButton>
            </ToggleButtonGroup>    
            <br />
            <br />
        </div>
    );
}

export default FilterItems