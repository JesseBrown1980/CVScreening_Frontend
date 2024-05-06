import React, { useState } from "react";
import PreViewer from "../component/PreView";

const Dashboard = () => {

  const gradient = {
    backgroundImage: "linear-gradient(to bottom, #ebe5fd, transparent)",
    backgroundSize: "100% 200px",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col" style={gradient}>
      <div className="flex justify-center ">
        <div className=" top-[106px] w-full  h-auto mt-24 flex-col items-center flex">
          <div className="font-sans">
            <h1 className="text-[48px] text-center font-semibold ">
              Free AI CV Checker Online
            </h1>
            <p className="text-[24px] text-center mt-6 ">
              Use AI CV checker to review CV and Job reqirements
            </p>
          </div>

          <PreViewer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
