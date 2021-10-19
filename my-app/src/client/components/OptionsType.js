import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './OptionsType.styles.css';



export default function OptionsType() {
    const [type, setType] = useState("")

    let types = [
        { label: "Web", value: "Web" },
        { label: "Full Stack", value: "Full Stack" },
    ]



    // let handleDateChange2 = (e) => {
    //     setType(e.target.value)
    // }

    return (
        <div>
            {type}
            Project type <select className='option-container' /*onChange={handleDateChange2}*/>
                <option value="Project type" > Any </option>
                {types.map((type) => <option value={type.value}>{type.label}</option>)}
            </select>
        </div >
    );
}

OptionsType.propTypes = {
    title: PropTypes.string.isRequired,
    variant: "dark"
};

OptionsType.defaultProps = {
    variant: 'dark',
};