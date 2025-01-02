import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/1.png";
import Tilt from "react-parallax-tilt"; 
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My field of interests are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning, Natural Language Processing, and Generative AI.
                </b>
              </i>
              <br />
              <br />
              I am skilled in both <b className="purple">Full Stack Development</b> and <b className="purple">DevOps</b> practices. I focus on <b className="purple">secure development</b> while leveraging cutting-edge technologies like <b className="purple">Google Cloud</b> and <b className="purple">Agile methodologies</b>.
              <br />
              <br />
              Whenever possible, I apply my passion for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
                <b className="purple"> Next.js</b>
                <b className="purple"> Redux</b>
              </i>
              <br />
              <br />
              I was honored to serve as the <b className="purple">Google DSC Web Lead'24 @MAJU</b> and am actively engaged in guiding students to enhance their web development skills.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-3xl" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jibrand"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="ml-[10px] mt-[9px]" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/jibrandevm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter className="ml-[10px] mt-[9px]" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-jibran220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn  className="ml-[10px] mt-[9px]"/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jibrandev890/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram  className="ml-[10px] mt-[9px]"/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
