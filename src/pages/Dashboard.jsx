import React from "react";
import PDFViewer from "../component/PDFviewer";

const Dashboard = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative top-[106px] w-[1232px] h-[456px] flex-col items-center flex">
        <div className="font-sans">
          <h1 className="text-[48px] text-center font-semibold ">
            Free AI Resume Checker Online
          </h1>
          <p className="text-[24px] text-center mt-6 ">
            Use AI resume checker to review your resume and receive instant
            feedback
          </p>
        </div>
        {/* PDFViewer   */}
        <div className="flex justify-around gap-7">
          <div className="w-[480px] h-[280px] mt-12 bg-white rounded-[20px] border-dashed border-gray-500 border-2">
            <PDFViewer />
          </div>
          <div className="w-[480px] h-[280px] mt-12 bg-white rounded-[20px] border-dashed border-gray-500 border-2">
            <PDFViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
