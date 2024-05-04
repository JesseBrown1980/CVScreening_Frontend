import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFViewer() {
  const [slesctedFile, setSelectedFile] = useState(null);
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPdfData(reader.result);
    };
    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <input type="file" accept=".pdf" onChange={onFileLoad} />

      {pdfData && (
        <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      )}

      {pdfData && (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
    </>
  );
}

export default PDFViewer;
