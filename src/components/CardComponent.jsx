import React from "react";

const CardComponent = ({ i, task }) => {
  return (
    <div className="flex flex-col bg-zinc-700/50 m-5 p-5 w-80 h-40  hover:scale-105 transition-all duration-200 hover:border hover:border-zinc-400/50 hover:transition-all hover:ease-in-out ease-in-out rounded-xl">
      <div></div>
      <div>
        <h1 className="text-2xl font-bold">To Do {i}</h1>
        <p className="break-all">{task}</p>
      </div>
    </div>
  );
};

export default CardComponent;
