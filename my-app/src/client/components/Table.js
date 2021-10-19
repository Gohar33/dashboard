import React from "react";
import { useTable } from "react-table";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import './Table.styles.css';

const useStyles = makeStyles({
    root: {

        color: "#0039F8",
        height: 48,
        padding: "0 60px",

    },
    root1: {
        height: 48,
        padding: "0 60px",

    }
});


const data = [
    { firstName: "Project 2", lastName: "Full Stack", age: "276,237,938" },
    { firstName: "Project 3", lastName: "Full Stack", age: "7,498,3938" },
    { firstName: "Project 4", lastName: "Web", age: "5,383,383" },
    { firstName: "Project 5", lastName: "Web", age: "1,234,344" },
    { firstName: "Project 6", lastName: "Web", age: "867,345" },
    { firstName: "Project 6", lastName: "Web", age: "867,345" }
];

const columns = [
    {
        Header: " ",
        columns: [
            {

                Header: "Projects",
                accessor: "firstName"
            }
        ]
    },
    {
        Header: " ",
        columns: [
            {
                Header: "Web",
                accessor: "lastName"
            }
        ]

    },
    {
        Header: " ",
        columns: [
            {
                Header: "299,787,988",
                accessor: "age"
            }
        ]
    }
];

function Table({ columns, data }) {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });
    const classes = useStyles();
    return (

        <MaUTable className="table-head"{...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell className={classes.root} {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody  >
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell className={classes.root1} {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </MaUTable>
    );
};

export default function TableApp() {
    return (
        <div className="App">
            <Table columns={columns} data={data} />
        </div>
    );
}