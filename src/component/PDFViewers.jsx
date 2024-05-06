import React, { useState } from "react";
import { AiTwotoneFilePdf } from "react-icons/ai";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";

function PDFViewers({ setFile, title }) {
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  const fileType = ["application/pdf"];
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onFileLoad = (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      if (file && fileType.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => {
          setViewPdf(e.target.result);
          setPdfFileError("");
        };
      } else {
        setViewPdf(null);
        setPdfFileError("Please select valid pdf file");
      }
    }

  };

  return (
    <div className="w-1/2 h-auto mt-12 bg-white rounded-[20px] border-dashed border-gray-500 border-2">
      {viewPdf ? (
        <div className="rounded-[20px]">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div style={{ height: "500px", overflowY: "hidden" }} className="rounded-[20px]">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
                theme="dark"
                defaultScale={SpecialZoomLevel.PageFit}
              />
            </div>
          </Worker>
        </div>
      ) : (
        <div className="inputarea flex flex-col h-[500px] justify-center items-center rounded-[20px]">
          <label htmlFor="pdfFile" className="sr-only">
            Choose a file
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={onFileLoad}
            className="absolute -top-[9999px]"
            id="pdfFile"
          />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <AiTwotoneFilePdf size={48} />
          <label
            htmlFor="pdfFile"
            className="text-xl font-semibold cursor-pointer"
          >
            <span style={{ color: "blue" }}>Choose a {title} file</span> (.pdf)
          </label>
        </div>
      )}
    </div>
  );
}

export default PDFViewers;
