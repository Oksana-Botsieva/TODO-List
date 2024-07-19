import React, { useState } from "react";
import TaskItem from "./OneTask";
import { ITask } from "../types";

const TasksList: React.FC = () => {
  //
  // 1. Разворачиваю компонент.Прописваю тип TaskList TaskList: React.FC
  //
  const [tasks, setTasks] = useState<ITask[]>([]);
  //
  // 2.Создаю состояние для тасков, начальное значение пустой массив,
  //     так же указываю тип useState<Task[]>

  const [taskText, setTaskText] = useState<string>("");
  //
  // 3.Создаю состояние для текста таксков, типизирую его useState<string>
  //
  const handleAddTask = (text: string) => {
    if (text.trim() === "") {
      return;
    }

    setTasks((prevTasks) => {
      const newTask: ITask = {
        id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
        text,
        completed: false,
      };
      return [...prevTasks, newTask];
    });
    setTaskText("");
  };
  //
  // 4. Прописываю функцию для добавление таска. Параметр по умолчанию - text. - добавляю тип string,
  //       создаю переменную  newTask - уже зная, какие параметры он принимает исходя из интерфейсов, задаю значение каждому ключу.
  //          обновляю состояние setTasks([...tasks, newTask]); --> копирую все предыдущие таски и добавляю новый
  //          newTask.
  //          setTaskText(""); --> изменяю состояние таска, очищаю инпут
  //

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  //
  // 5. Создаю функцию переключатель, выполнено/не выполнено. Параметр по умолчанию - id - тип:number.,
  //      изменяю состояния тасков. Прохожу по массиву с помощью map - если id таска совпадает с id -переданным в
  //      функцию, то мы меняем только ключ completed, либо возвращаем обратно наш таск
  //
  const handleRemoveTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  //
  // 6. Функцию удаления таска
  //
  const handleChangeTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (taskText.trim() === "") {
        return;
      }
      setTasks((prevTasks) => {
        const newTask: ITask = {
          id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
          text: taskText,
          completed: false,
        };
        return [...prevTasks, newTask];
      });
      setTaskText("");
    }
  };

  return (
    <div>
      <>
        <input
          type="text"
          value={taskText}
          onChange={handleChangeTaskText}
          onKeyUp={handleEnterPress}
        />
        <button onClick={() => handleAddTask(taskText)}>Add Task</button>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </>
    </div>
  );
};

export default TasksList;