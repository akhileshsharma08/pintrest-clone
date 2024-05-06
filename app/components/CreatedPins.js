import React from "react";

const CreatedPins = (data) => {
  return (
    <div>
      <h1 className=" text-4xl text-center my-10 font-bold">

      {!data || data.length <= 0
        ? " Here are the pins"
        : (`Nothing to show...yet!`)}
      </h1>
    </div>
  );
};

export default CreatedPins;
