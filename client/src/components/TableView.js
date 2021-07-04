
import { useState, useEffect } from 'react';
import TableSelect from './TableSelect';
import TableResults from './TableResults';

//NOTES: 
//  add reset the current page for individual tables when changing tables
//  make URLs below read from a .env file

const TableView = () => {

    const [tableNames, setTableNames] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [tableCols, setTableCols] = useState([]);

    const handleGetTableNames = () => {
        fetch("http://localhost:5000/api/tables")
            .then(result => result.json())
            .then(result => setTableNames(result.tables));
    };

    const handleSelectTable = (tableName) => {
        console.log("selected table ", tableName);
        fetch(`http://localhost:5000/api/tables/${tableName}`)
        .then(result => result.json())
        .then(result => formatTable(result.tableData));
    };

    const formatTable = (tableData) => {
        const cols = Object.keys(tableData[0]);
        setTableCols(cols);
        setTableRows(tableData);
    };

    useEffect(() => {
        handleGetTableNames();
    }, []);

    return (
        <div className="table-view-container">
            <TableSelect tableNames={tableNames} selectTable={handleSelectTable} />
            <TableResults cols={tableCols} rows={tableRows} />
        </div>
    )
};

export default TableView;