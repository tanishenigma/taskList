import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Card from "./components/Card";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const onAdd = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
    };
    setTasks((prevTask) => [...prevTask, newTask]);
  };
  return (
    <div>
      <AddTask onAdd={onAdd} />
      <Card tasks={tasks} />
    </div>
  );
};

export default App;
