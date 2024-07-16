import React from "react";
import { Task } from "../types";
import "../style/oneTask.scss";

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const OneTask: React.FC<TaskProps> = ({ task, toggleTask, removeTask }) => {
  return (
    <div className={"task"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => removeTask(task.id)}> Remove</button>
    </div>
  );
};

export default OneTask;