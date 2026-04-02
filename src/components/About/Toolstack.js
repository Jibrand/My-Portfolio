import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiVisualstudio,
  SiAmazonaws,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import { AiFillGitlab, AiFillGithub } from "react-icons/ai";

const toolStyle = {
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

const toolHoverStyle = {
  ...toolStyle,
  color: "#c770f0",
  borderColor: "#c770f0",
  transform: "scale(1.05)",
  boxShadow: "0 0 15px rgba(199, 112, 240, 0.4)",
};

function Toolstack() {
  const [hoveredTool, setHoveredTool] = React.useState(null);

  const renderTool = (Tool, index) => (
    <div
      key={index}
      onMouseEnter={() => setHoveredTool(index)}
      onMouseLeave={() => setHoveredTool(null)}
      style={hoveredTool === index ? toolHoverStyle : toolStyle}
    >
      <Tool />
    </div>
  );

  return (
    <div style={{ paddingBottom: "50px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {renderTool(SiVisualstudiocode, 0)}
        {renderTool(SiVisualstudio, 1)}
        {renderTool(SiAmazonaws, 2)}
        {renderTool(SiVercel, 3)}
        {renderTool(AiFillGitlab, 4)}
        {renderTool(AiFillGithub, 5)}
        {renderTool(SiHeroku, 6)}
      </div>
    </div>
  );
}

export default Toolstack;
