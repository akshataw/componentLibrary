import React from "react";

export interface TaskProps {
    id?: number;
    title?: string;
    state?: string;
};

const Task = ({
    state = 'TASK_INBOX',
    title = "Learn React",
    id,
}: TaskProps) => {
    return (
        <div className={`list-item ${state}`}>
            <div className="title">
                <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} name="checked" />
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>
        </div>
    )
};

export default Task;