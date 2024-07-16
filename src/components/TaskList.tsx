import React, { useState } from "react";
import { Task } from "../types";
import OneTask from "./OneTask";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>("");

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={() => addTask(taskText)}>Add Task</button>
        {tasks.map((task) => (
          <OneTask
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </>
    </div>
  );
};

export default TaskList;