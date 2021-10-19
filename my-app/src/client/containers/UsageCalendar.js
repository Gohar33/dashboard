import React from 'react';
import Title from '../components/Title'
import Datapicker from '../components/Datapicker';
import './UsageCalendar.styles.css';

export default function UsageCalendar() {
    return (
        <div className="usage-navigation">
            <div>
                <Title title='Usage Consumption by project' variant="black-large" />
            </div>
            <div className="date-input">
                <Datapicker />
            </div>
        </div>
    )
}