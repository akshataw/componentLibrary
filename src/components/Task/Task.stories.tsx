import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Task, { TaskProps } from "./Task";

export default {
    title: "Components/Task",
    component: Task,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
    title: 'Explore React',
    state: false,
    backgroundColor: 'white',
};

export const CompletedTask = Template.bind({});
CompletedTask.args = {
    id: 1,
    title: 'Explore React',
    state: true,
    backgroundColor: 'green',
};

export const ExtendedTask = Template.bind({});
ExtendedTask.args = {
    id: 1,
    title: 'Explore React',
    state: false,
    backgroundColor: 'red',
};