import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiDotnet, SiCplusplus } from "react-icons/si";
import { FaDocker, FaJenkins, FaAngular } from "react-icons/fa";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiPrometheus,
  SiGrafana,
  SiVuedotjs,
  SiPython,
  SiAnsible,
  SiTerraform,
  SiKubernetes,
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
  SiPhp,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiExpress,
  SiWordpress,
  SiGithubactions,
  SiTensorflow,
  SiOpenai,
  SiPytorch,
} from "react-icons/si";

const iconStyle = {
  fontSize: "55px",
  margin: "15px",
  color: "rgb(155 126 172)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: "20px 25px",
  border: "2px solid rgb(155 126 172)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100px",
  minHeight: "100px",
};

const iconHoverStyle = {
  ...iconStyle,
  color: "#c770f0",
  borderColor: "#c770f0",
  transform: "scale(1.05)",
  boxShadow: "0 0 15px rgba(199, 112, 240, 0.4)",
};

const textBadgeStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "15px",
  color: "rgb(155 126 172)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: "20px 25px",
  border: "2px solid rgb(155 126 172)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100px",
  minHeight: "100px",
};

const textBadgeHoverStyle = {
  ...textBadgeStyle,
  color: "#c770f0",
  borderColor: "#c770f0",
  transform: "scale(1.05)",
  boxShadow: "0 0 15px rgba(199, 112, 240, 0.4)",
};

function Techstack() {
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  const renderIcon = (Icon, index) => (
    <div
      key={index}
      onMouseEnter={() => setHoveredIcon(index)}
      onMouseLeave={() => setHoveredIcon(null)}
      style={hoveredIcon === index ? iconHoverStyle : iconStyle}
    >
      <Icon />
    </div>
  );

  const renderTextBadge = (text, index) => (
    <div
      key={index}
      onMouseEnter={() => setHoveredIcon(index)}
      onMouseLeave={() => setHoveredIcon(null)}
      style={hoveredIcon === index ? textBadgeHoverStyle : textBadgeStyle}
    >
      {text}
    </div>
  );

  return (
    <div style={{ paddingBottom: "50px", textAlign: "center" }}>
      {/* Full Stack Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          💻 <strong className="purple">Full Stack</strong> Development
        </h2>

        {/* Frontend */}
        <div style={{ marginBottom: "50px" }}>
        
           <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          <strong className="purple underline">Frontend</strong> 
        </h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {renderIcon(DiReact, 0)}
            {renderIcon(SiVuedotjs, 1)}
            {renderIcon(SiNextdotjs, 3)}
            {renderIcon(DiJavascript1, 4)}
          </div>
        </div>

        {/* Backend */}
        <div style={{ marginBottom: "50px" }}>
         
           <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          <strong className="purple underline">Backend</strong> 
        </h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {renderIcon(DiNodejs, 6)}
            {renderIcon(SiExpress, 7)}
            {renderIcon(DiPython, 8)}
            {renderIcon(SiCsharp, 10)}
            {renderIcon(SiDotnet, 11)}
          </div>
        </div>

        {/* Databases & Services */}
        <div>
        
             <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          <strong className="purple underline">            Databases & Services</strong> 
        </h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {renderIcon(DiMongodb, 12)}
            {renderIcon(SiMicrosoftsqlserver, 13)}
            {renderIcon(IoLogoFirebase, 14)}
          </div>
        </div>
      </div>

      {/* DevOps Section */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          🚀 <strong className="purple">DevOps</strong> & Infrastructure
        </h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {renderIcon(FaDocker, 17)}
          {renderIcon(SiKubernetes, 18)}
          {renderIcon(FaJenkins, 19)}
          {renderIcon(SiGithubactions, 20)}
          {renderIcon(SiTerraform, 21)}
          {renderIcon(SiAnsible, 22)}
          {renderIcon(SiGrafana, 23)}
          {renderIcon(SiPrometheus, 24)}
        </div>
      </div>

      {/* GenAI Section */}
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "1.8em" }}>
          🧠 <strong className="purple">GenAI</strong> & Machine Learning
        </h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {renderIcon(SiTensorflow, 25)}
          {renderIcon(SiPython, 26)}
          {renderIcon(SiOpenai, 27)}
          {renderIcon(SiCplusplus, 28)}
          {renderIcon(SiPytorch, 29)}
          {renderTextBadge("LangChain", 30)}
          {renderTextBadge("Pinecone", 31)}
          {renderTextBadge("RAG", 32)}
        </div>
      </div>
    </div>
  );
}

export default Techstack;
