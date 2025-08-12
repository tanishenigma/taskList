import { PlusIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState([]);
  const handleAdd = () => {
    const content = task;
  };
  return (
    <div className="flex m-10">
      <div className="flex items-center rounded-md p-2 bg-zinc-700/50 border border-zinc-400/40">
        <input
          className="rounded-md p-2 text-xl bg-transparent focus-within:outline-none"
          placeholder="Add a task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <PlusIcon
          className="mr-2 cursor-pointer"
          onClick={() => {
            handleAdd();
          }}
        />
      </div>
    </div>
  );
};

export default AddTask;
