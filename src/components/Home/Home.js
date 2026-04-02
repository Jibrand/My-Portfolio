import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 style={{ paddingBottom: 0 }} className="heading-name">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h3>

              <h1 className="heading-name" style={{ marginBottom: "6px" }}>
                I'M
                <strong className="main-name"> MUHAMMAD JIBRAN</strong>
              </h1>
              <h6 className="heading-name " style={{ marginTop: "6px", paddingTop: "10px", textDecoration: "italic" }}>
                <strong className="main-name">
                  Full Stack Developer &nbsp;|&nbsp; DevOps Engineer &nbsp;|&nbsp; Gen AI Developer
                </strong>
              </h6>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home3 />
      <Home2 />
    </section>
  );
}

export default Home;
