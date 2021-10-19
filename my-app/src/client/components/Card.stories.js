import React from 'react';
import Card from './Card';


export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        variant: ["primary", "secondary"]
    },
};

const Template3 = (args) => <Card {...args} />;



export const Primary = Template3.bind({});
Primary.args = {
    primary: true,
    label: 'Card',
    title: "Monthly Usage",
    result: "87%"
};

const Template4 = (args) => <Card {...args} />;



export const Secondary = Template4.bind({});
Primary.args = {
    primary: false,
    label: 'Card',
    title: "Annual Usage",
    result: "54%"
};




