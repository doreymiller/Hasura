import Table from 'react-bootstrap/Table';
import PageSelect from './PageSelect';
import { useState } from 'react';

const TableResults = ({ cols, rows }) => {

    const rowsPerPage = 10;

    const [currentPageNum, setCurrentPageNum] = useState(0);

    const formatRow = (rowNum, rowData) => {
        let cells = cols.map(col => rowData[col]);

        return (
            cells.map((cell, idx) => <td key={`${rowNum}_${idx}`}>{cell}</td>)
        )
    };

    const currentPageRows = () => {
        let start = currentPageNum * rowsPerPage;
        let end = start + rowsPerPage;
        return rows.slice(start, end);
    };

    const handleSelectPage = (pageNum) => {
        setCurrentPageNum(pageNum);
    };

    return (
        <div className="table-results">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {cols.map(col => {
                            return <th key={`col_${col}`}>{col}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        currentPageRows().map((row, idx) => <tr key={`tr_${idx}`}>{formatRow(idx, row)}</tr>)
                    }

                </tbody>
            </Table>
            <PageSelect currentPage={currentPageNum} numPages={Math.ceil(rows.length/rowsPerPage)} selectPage={handleSelectPage} />
        </div>
       
    )
}

export default TableResults;