import React from "react";
import Title from '../components/Title'
// import Input from "../components/Input";
// import OptionsDate from "../components/OptionsDate";
// import OptionsType from "../components/OptionsType";

import './Filter.styles.css';






export default function Filter({ filter, setFilter }) {

    const handleChange = e => {
        console.log(e)
        if (e) {
            setFilter(e)

        }


    };


    return (
        <div className="navigation">
            <div>
                <Title title='Usage Consumption' variant="black-large" />
            </div>
            {/* <div className="filter-components">
                <Input placeholder="Filter by Project Name" showSearchIcon={true} value={filter} onChange={(e) => handleChange(e)} />
                <OptionsDate />
                <OptionsType />
            </div > */}
        </div >
    )
}
