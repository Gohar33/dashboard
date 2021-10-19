import React from 'react';
import './Card.styles.css';
import PropTypes from 'prop-types';


export default function Card(props) {
    const { variant, title, result } = props;
    return (
        <div className={`card-${variant}`} >
            <h1 className="card-title">{title}</h1>
            <p className="card-result">{result}</p>
        </div >
    )
}

Card.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

Card.defaultProps = {
    variant: "primary"
};
