import React from 'react';
import PropTypes from 'prop-types';
import './Title.styles.css';


export default function Title({ title, variant }) {
    return (
        <div classnName="title-container">
            <div className={`title-${variant}`}> {title} </div>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['black', 'black-large']),
};

Title.defaultProps = {
    variant: 'black',
};