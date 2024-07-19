import React from "react";
import { ITask } from "../types";
import "../style/oneTask.scss";

interface TaskProps {
  task: ITask;
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