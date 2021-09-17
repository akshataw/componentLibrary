import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner, { SpinnerProps } from './Spinner';
import styled from 'styled-components';

export default {
    title: 'Components/Spinner',
    component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args: JSX.IntrinsicAttributes & SpinnerProps & React.RefAttributes<HTMLDivElement>) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 50
}

const DarkBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #2c2c59;
`;

export const Light: React.FC = () => (
    <DarkBackground>
        <Spinner size={50} light />
    </DarkBackground>
)