import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Task, { TaskProps } from "./Task";

export default {
    title: "Components/Task",
    component: Task,
} as Meta;

const Template: Story<TaskProps> = (args: JSX.IntrinsicAttributes & TaskProps) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
    title: 'Explore React',
    state: 'TASK_INBOX',
};

export const PinnedTask = Template.bind({});
PinnedTask.args = {
    id: 1,
    title: 'Explore React',
    state: 'TASK_PINNED',
};

export const ArchivedTask = Template.bind({});
ArchivedTask.args = {
    id: 1,
    title: 'Explore React',
    state: 'TASK_ARCHIVED',
};