import React from 'react';
import PropTypes from 'prop-types';

const TableTest2 = ({ tableData, headingColumns, title }) => {

    let data = tableData.map((row, index) => {
        let rowData = [];
        let i = 0;
        for (const key in row) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            i++;
        }
        return <tr key={index}>
            {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
        </tr>
    });
    return (
        <div className="table-container">
            <div className="table-container_title">
                <h2>{title}</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        {headingColumns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>

        </div>
    )
}

TableTest2.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
}



export default TableTest2