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

  const onRemove = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <AddTask onAdd={onAdd} />
      <Card tasks={tasks} onRemove={onRemove} />
    </div>
  );
};

export default App;
