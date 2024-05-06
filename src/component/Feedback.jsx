import React from "react";
import ScoreBar from "./ProgressBar/ScoreBar";
import TextDisplay from "./TextDisplay";
const Feedback = ({ score, description }) => {

  return (
    <div className="p-7 w-1/2">
      <ScoreBar value={score} />
      <div>
        <p className="p-4 font-bold text-[18px]">Resume Feedback</p>
      </div>
      <div className="bg-gray-100 rounded-2xl w-auto h-auto p-5">
        <TextDisplay text={description} />
      </div>
    </div>
  );
};
export default Feedback;
