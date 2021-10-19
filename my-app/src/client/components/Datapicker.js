import React, { useState } from 'react';
import './Datapicker.styles.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'
//import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';


function Datapicker() {
    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div className="data-wrapper">
            <DateRangePicker
                className="data-picker"
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Datapicker