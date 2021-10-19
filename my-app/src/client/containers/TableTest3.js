import "./TableTest3.styles.css";
import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import OptionsDate from "../components/OptionsDate";
import OptionsType from "../components/OptionsType";





const project =
    [
        // { Projects: 1, "Project type": "", "Usage consumption": "" },
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


function TableTest3() {
    const [filter, setFilter] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [type, setType] = useState('');
    const [searchResults2, setSearchResults2] = useState([]);

    const handleChange = e => {
        console.log(e)
        if (e) {
            setFilter(e)

        }
        if (e === "") {
            setFilter(e)
        }

    };

    const handleChange2 = e => {
        console.log(e)
        if (e) {
            setType(e)

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

    useEffect(() => {
        const results2 = project.filter(item2 =>
            item2.name.includes(type)
        );
        setSearchResults2(results2);
    }, [type]);
    <ul>
        {searchResults2.map(item2 => (
            <li>{item2}</li>
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
                <OptionsType value={type} onClick={(e) => handleChange2(e)} />
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





export default TableTest3;
