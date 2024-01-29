import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Muhammad_Jibran_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={1.2}  className="pdf-page"/>
          </Document>
        </Row>

       

       
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
           href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Row>
      </Container>
      <style jsx>{`
        .pdf-page {
          border-radius: 10px;
          overflow: hidden;
          overflow-x: auto;
        }
        
        .pdf-page::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
