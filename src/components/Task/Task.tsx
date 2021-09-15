import React from "react";

export interface TaskProps {
    id?: number;
    backgroundColor?: string;
    title?: string;
    state?: boolean;
};

const Task = ({
    state = false,
    backgroundColor,
    title = "Learn React",
    id,
}: TaskProps) => {
    return (
        <div className="list-item">
            { id }<input type="text" value={title} style={backgroundColor ? { backgroundColor } : {}} readOnly={true} />
        </div>
    )
};

export default Task;