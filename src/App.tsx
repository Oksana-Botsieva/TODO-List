import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header title="Todo List" />
      <TaskList />
    </div>
  );
}

export default App;