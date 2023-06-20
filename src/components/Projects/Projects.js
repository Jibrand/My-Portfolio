import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import todo from "../../Assets/Projects/todo.png";
import ecommer from "../../Assets/Projects/ecommer.jpg";
import book from "../../Assets/Projects/book.jpg";
import cont from '../../Assets/cont.jpg'
import saas from '../../Assets/saas.jpg'
import as from '../../Assets/as.png'
import as2 from '../../Assets/2.png'
import as3 from '../../Assets/3.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cont}
              isBlog={false}
              title="Open AI Application (Copymatic) | Frontend (MERN)"
              description="I design the frontend of Open AI application to generate the Automatic blog and content, such as Copymatic and Chat Gpt, use Tailwind Css with glass morphism effects, Mobile Responsive, and eye-catchy."
          
              demoLink="https://dribbble.com/shots/20956454-Open-AI-Application-Copymatic-Frontend-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saas}
              isBlog={false}
              title=" Project Management, SAAS Application | Full Stack (MERN)"
              description="I design both frontend and backend using cloud database (mongodb), RFQ will generate whichwill be invited to vendors to get their Quotes, different profile section for them and for the higher-Committee, the Data is Authenticated and Safe."
              
               demoLink="http://54.37.6.229:3000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as}
              isBlog={false}
              title="Job Finding | Mobile App (Cross Platform) | React Native"
              description="I made the Job Finding app in React Native. Jobs are listed from Rapid API, Users can select and apply for jobs by joining their respective websites from the app."
              ghLink="https://github.com/Jibrand/React-Native-Jobs-Application"
              demoLink="https://dribbble.com/shots/11867493-Job-finder-Mobile-UI-Job-list"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as2}
              isBlog={false}
              title="Blockchain Cryptocurrency App | Web 3.0"
              description="I made the Blockchain (Web 3.0) application through which we can send Ethereum to any Blockchain Address and charge the Gas Price, against each transaction, also record all of the transactions with a unique gif."
              ghLink="https://github.com/Jibrand/Web-3.0"
              demoLink="https://mykryptc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={as3}
              isBlog={false}
              title="Tons of Web & desktop Applications"
              description="I built tons of websites with the passage of time, with Different Programming Languages and With other Platforms such as using MERN Stack, WordPress, Wix, and Shopify, interacting with many databases such as Mongo Db, Firebase, Ms. SQL Server, My SQL, etc."
              ghLink="https://github.com/Jibrand"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
