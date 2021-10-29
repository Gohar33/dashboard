import "./Table.styles.css";
import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import OptionsDate from "../components/OptionsDate";
import OptionsType from "../components/OptionsType";








function Table() {
    const [filter, setFilter] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const project =
        [

            { id: "First project", name: "Web", usage: "29,263,322" },
            {
                id: "Second project",
                name: "Full Stack",
                usage: "21,273,213"
            },
            {
                id: "Third project",
                name: "Full Stack",
                usage: "7,498,3938"
            },
            {
                id: "Fourth project",
                name: "Web",
                usage: "5,383,383"
            },
            { id: "Fifth project", name: "Web", usage: "1,234,344" },
            {
                id: "Sixth project",
                name: "Web",
                usage: "867,345"
            }
        ]
    const handleChange = e => {
        console.log(e)
        if (e) {
            setFilter(e)

        }
        if (e === "") {
            setFilter(e)
        }

    };



    useEffect(() => {
        const results = project.filter(item =>
            item.id.toLowerCase().includes(filter)
        );
        setSearchResults(results);
    }, [filter]);
    <ul>
        {searchResults.map(item => (
            <li>{item}</li>
        ))}
    </ul>




    function renderTableHeader() {
        let header = Object.keys(project[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    }

    function renderTableData() {
        return searchResults.map((item, index) => {
            const { id, name, usage } = item;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{usage}</td>
                </tr>
            );
        });
    }


    return (
        <div>
            <div class="flex">
                <Input placeholder="Filter by Project" showSearchIcon={true} value={filter} onChange={(e) => handleChange(e)} />
                <OptionsDate />
                <OptionsType />
            </div>
            <br></br>
            <table id="students">
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>

        </div>
    )
};





export default Table;
