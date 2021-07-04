import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const TableSelect = ({ tableNames, selectTable }) => {

    console.log("tableNames: ", tableNames);

    return (
        
        <DropdownButton id="dropdown-basic-button" title="Table Select">
            { tableNames.map(name => {
                return <Dropdown.Item key={`table_${name}`} onClick={() => selectTable(name)}>{name}</Dropdown.Item>
            })}
        </DropdownButton>
    )
};

export default TableSelect;