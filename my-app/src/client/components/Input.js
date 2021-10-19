import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

export default function Input({
    type,
    inputValue,
    placeholder,
    borderShape,
    showSearchIcon,
    onChange,
}) {


    function getInputClassNames() {
        const classNames = ['inputComponentContainer'];
        classNames.push(borderShape === 'curved' ? 'curvedBorder' : 'roundBorder');
        return classNames.join(' ');
    }

    function getSearchIconContent() {
        if (showSearchIcon) {
            return (
                <div className="searchContainer">
                    <div className="searchContent">
                        <div>
                            &#128269;
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div className={getInputClassNames()}>
            {getSearchIconContent()}
            <div className="inputTextContainer">
                <input
                    type={type}
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'date',
        'datetime-local',
        'number',
    ]),
    inputValue: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark']),
    borderShape: PropTypes.oneOf(['curved', 'round']),
    showSearchIcon: PropTypes.bool,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    borderShape: 'round',
    showSearchIcon: false,
};



