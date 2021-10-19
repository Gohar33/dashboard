import React, { useState } from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Input Component',
    component: Input,
    argTypes: { onChange: { action: 'changed' } },
};



function useSearchInput() {
    const [inputValue, setInputValue] = useState('');
    return (
        <Input
            placeholder="Filter by Project"
            borderShape="round"
            inputValue={inputValue}
            showSearchIcon={true}
            onChange={(e) => {
                setInputValue(e);
                action('You have changed the search input content')(e);
            }}
        />
    );
}

export const SearchInput = () => useSearchInput();






function useDateInput() {
    const [inputValue, setInputValue] = useState('');
    return (
        <Input
            type="date"
            placeholder="Date"
            borderShape="round"
            theme="light"
            inputValue={inputValue}
            onChange={(e) => {
                setInputValue(e);
                action('You have changed the date input content')(e);
            }}
        />
    );
}

export const DateInput = () => useDateInput();



