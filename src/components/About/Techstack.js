import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDotnet ,  SiCplusplus} from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {  IoLogoFirebase} from "react-icons/io5";
  import {
  SiFlutter,
  SiFirebase, 
  SiNextdotjs,
  SiPhp,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiExpress,
  SiWordpress,
  SiGithubactions
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="ml-12"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="ml-12"  />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="ml-12"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="ml-12"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFirebase className="ml-12"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions  className="ml-12"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp className="ml-12" />
      </Col> 

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver className="ml-12"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet className="ml-12" />
      </Col>

    <Col xs={4} md={2} className="tech-icons">
        <SiWordpress className="ml-12" />
      </Col>

     
     
      
    
     
     
  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="ml-12"/>
      </Col>
     
    </Row>
  );
}

export default Techstack;
