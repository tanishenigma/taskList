import React, { useState } from "react";
import CardComponent from "./CardComponent";

const Card = ({ tasks, onRemove }) => {
  const [done, setDone] = useState([]);
  return (
    <div className="flex flex-col flex-wrap m-5">
      {/*Incomplete Tasks*/}
      <h1 className="flex text-3xl tracking-tighter font-bold m-10">
        Incomplete Tasks
      </h1>
      <div className="flex flex-wrap m-5 mt-0">
        {tasks.map((t, index) => (
          <CardComponent
            key={t.id}
            id={t.id}
            task={t.text}
            onRemove={onRemove}
            index={index}
          />
        ))}
      </div>
      {/* {COMPLETE TASKS} */}
      <div className="m-10">
        <h1 className="text-3xl tracking-tighter font-bold font-strike">
          Completed Tasks
        </h1>
        {tasks.length === 0 ? (
          <p className="text-zinc-400 mt-10">No Task Yet</p>
        ) : (
          <p>Tasks</p>
        )}
      </div>
    </div>
  );
};

export default Card;
