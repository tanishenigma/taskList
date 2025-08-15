import React from "react";
import CardComponent from "./CardComponent";

const Card = ({ tasks, onRemove }) => {
  return (
    <div className="flex flex-col flex-wrap m-5">
      <div className="">
        <h1 className="flex text-3xl tracking-tighter font-bold m-10">
          Incomplete Tasks
        </h1>
        <div className="flex flex-wrap m-5 mt-0">
          {tasks.map((t, i) => (
            <CardComponent
              key={i}
              id={t.id}
              task={t.text}
              onRemove={t.onRemove}
            />
          ))}
        </div>
      </div>
      <div className="m-10">
        <h1 className="text-3xl tracking-tighter font-bold font-strike">
          Completed Tasks
        </h1>
        <p className="text-zinc-400 mt-10">No Task Yet</p>
      </div>
    </div>
  );
};

export default Card;
