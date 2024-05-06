import React from "react";
import Bar from "./Bar";
const ScoreBar = ({ value }) => {
  const text = value > 6 ? ("This CV is well-suited to the job's requirements. ") : ("This CV is inappropriate for the job's requirements.")
  return (
    <div className=" p-9 bg-gray-100 rounded-2xl">
      <div className=" flex flex-row items-center font-bold text-[18px]">
        <h1 className="">Score : {value}</h1>
        <h1 className="text-gray-700 ">/10</h1>
      </div>
      <div>
        <p className="text-[16px]">
          {text}
        </p>
        <Bar value={value} />
      </div>
    </div>
  );
};

export default ScoreBar;
