import React from 'react';
import Title from './Title.js'
import { text, select } from '@storybook/addon-knobs';



export default {
    title: 'Title',
    component: Title,
};

const Template = (args) => <Title {...args} />;

export const TestTitle = () => (
    <Title
        title={text('Title', ' MAU Usage Summary ')}
        variant={select('Text color', ['black', 'black-large'])}
    />
);

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Title',
};