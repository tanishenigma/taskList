import { CheckCircle, TrashIcon } from "lucide-react";
import React from "react";

const CardComponent = ({ i, task, onRemove }) => {
  return (
    <div className="flex flex-col bg-zinc-700/50 m-5 p-5 w-80 h-40  hover:scale-105 transition-all duration-200 hover:border hover:border-zinc-400/50 hover:transition-all hover:ease-in-out ease-in-out rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task{i}</h1>
          <div className="flex gap-x-2">
            <TrashIcon
              className="hover:text-red-500 cursor-pointer w-5 h-5 hover:scale-125 ease-in-out transition-all duration-200  "
              onClick={onRemove}
            />
            <CheckCircle className="hover:text-green-500 cursor-pointer w-5 h-5 hover:scale-125 ease-in-out transition-all duration-200 " />
          </div>
        </div>
        <p className="break-all">{task}</p>
      </div>
    </div>
  );
};

export default CardComponent;
