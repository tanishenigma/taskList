import React from "react";
import CardComponent from "./CardComponent";

const Card = () => {
  return (
    <div className="flex flex-wrap m-5">
      <h1 className="text-3xl tracking-tighter font-bold m-10">
        Incomplete Tasks
      </h1>
      <div className="flex flex-wrap m-5 mt-0">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className="m-10">
        <h1 className="text-3xl tracking-tighter font-bold">Completed Tasks</h1>
        <p className="text-zinc-400 mt-10">No Task Yet</p>
      </div>
    </div>
  );
};

export default Card;
