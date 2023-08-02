import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiVisualstudio,
  SiAmazonaws,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="ml-12"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio className="ml-12"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws className="ml-12"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="ml-12"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku className="ml-12"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
