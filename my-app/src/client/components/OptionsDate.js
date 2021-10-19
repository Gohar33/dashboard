import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './OptionsDate.styles.css';



export default function OptionsDate() {
    const [date, setDate] = useState("")

    let days = [
        { label: "Last 2 weeks", value: "Last 2 weeks" },
        { label: "Last month", value: "Last month" },
        { label: "Last 3 months", value: "Last 3 months" },
        { label: "Last 6 months", value: "Last 6 months" },
        { label: "Last year", value: "Last year" }
    ]



    // let handleDateChange = (e) => {
    //     setDate(e.target.value)
    // }

    return (
        <div>
            {date}
            Date <select className='option-container' /*onChange={handleDateChange}*/>
                <option> Last 7 days </option>
                {days.map((day) => <option value={day.value}>{day.label}</option>)}
            </select>
        </div >
    );
}

OptionsDate.propTypes = {
    title: PropTypes.string.isRequired,
    variant: "dark"
};

OptionsDate.defaultProps = {
    variant: 'dark',
};