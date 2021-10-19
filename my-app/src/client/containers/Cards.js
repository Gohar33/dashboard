// import React, { useState, useEffect } from 'react';
import React from 'react';
import Card from '../components/Card';
import './Cards.styles.css';

// const fetchGithubAPI = () => {
//     return fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
//         response.json()
//     );
// };


export default function Cards() {

    return (
        <div className='cards'>
            <div className="card-list">
                <Card title="Monthly Usage" result="74%" variant="primary" />
                <Card title="Monthly Usage Availability" result="26%" variant="primary" />
                <Card title="Monthly Purchased" result="867,345" variant="primary" />
            </div>
            <div className="card-list">
                <Card title="Annual Usage" result="54%" variant="secondary" />
                <Card title="Annual Usage Availability" result="40%" variant="secondary" />
                <Card title="Annual Purchased" result="867,345,123" variant="secondary" />
            </div>
        </div >
    )
}