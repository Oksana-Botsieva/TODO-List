import React from "react";
import { Task } from "../types";
import "../style/oneTask.scss";

interface TaskProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({
  task,
  onToggleTask,
  onRemoveTask,
}) => {
  return (
    <div className={"task"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => onRemoveTask(task.id)}> Remove</button>
    </div>
  );
};

export default TaskItem;