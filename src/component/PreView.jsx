import { React, useState, useEffect } from "react";
import PDFViewer from "./PDFViewers";
import Feedback from "../component/Feedback";
import axiosInstance from "../utils/AxiosInstance";
import { BASE_URL } from "../utils/Config";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Email from "./Email";
import Loading from "react-fullscreen-loading";

const PreViewer = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [score, setScore] = useState(0);
  const [desc, setDesc] = useState(null);
  const [isSpinner, setIsSpinner] = useState(false);
  useEffect(() => {
    if (resumeFile && jobFile) {
      const formData = new FormData();
      formData.append('cv', resumeFile);
      formData.append('job', jobFile);
      setIsSpinner(true);
      axiosInstance({
        method: "post",
        url: `${BASE_URL}/upload`,
        data: formData
      })
        .then((res) => {
          setIsSpinner(false);
          toast.success("Please check CV score", {
            position: "top-right"
          });
          setScore(res.data.score);
          setDesc(res.data.decription);
        })
        .catch((err) => {
          setIsSpinner(false);
          if (err.response) {
            const errorMessage = err.response.data.error;
            toast.error(errorMessage, {
              position: "top-right"
            })
          }
        })
    }
  }, [resumeFile, jobFile])

  return (
    <div className="w-full  flex justify-center px-20 flex-col">
      <div className="w-full flex flex-row gap-14">
        <PDFViewer setFile={setResumeFile} title="CV" />
        <PDFViewer setFile={setJobFile} title="Job description" />
      </div>
      {desc && score && (
        <>
          <div className="flex justify-center">
            <Feedback score={score} description={desc} />
          </div>
          <div className="flex justify-center">
            <Email />
          </div>
        </>

      )}
      <Loading loading={isSpinner} style={{ background: "#f9f9ff" }} loaderColor="#3498db" />
      <ToastContainer />
    </div>

  );
};

export default PreViewer;
