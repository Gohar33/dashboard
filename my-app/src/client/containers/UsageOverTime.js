import React from 'react';
import Title from '../components/Title'
import Datapicker from '../components/Datapicker';
// import Input from '../components/stories/Input'
import './UsageOverTime.styles.css';

export default function UsageOverTime() {
    return (
        <div className="usage-navigation">
            <div>
                <Title title='Usage Over Time' variant="black-large" />
            </div>
            <div className="date-input">
                {/* <Input type="date"
                    placeholder="Date"
                    borderShape="round"
                    theme="light"
                /> */}
                <Datapicker />
            </div>
        </div>
    )
}