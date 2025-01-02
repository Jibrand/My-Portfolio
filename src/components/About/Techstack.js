import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDotnet, SiCplusplus } from "react-icons/si";
import { FaDocker, FaJenkins, FaAngular } from "react-icons/fa";
// import { AiOutlineKubernetes } from "react-icons/ai";
// import { TbLambda } from "react-icons/tb";

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
  SiPrometheus ,
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
  SiGithubactions
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFirebase className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaDocker className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes className="ml-12" />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus  className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible className="ml-12" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbLambda     className="ml-12" />
      </Col>  */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions className="ml-12" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet className="ml-12" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress className="ml-12" />
      </Col>








      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="ml-12" />
      </Col>

    </Row>
  );
}

export default Techstack;
