import React from 'react';
import OptionsDate from './OptionsDate.js'


export default {
    title: 'OptionsDate',
    component: OptionsDate,
};

const Template1 = (args) => <OptionsDate {...args} />;

export const Large = Template1.bind({});
