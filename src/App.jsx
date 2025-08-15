import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { Toaster } from "@/components/ui/sonner";

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
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <AddTask onAdd={onAdd} />
      <TodoList tasks={tasks} onRemove={onRemove} />
    </div>
  );
};

export default App;
