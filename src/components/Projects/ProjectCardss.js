import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <>
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{   width: '100%', height: '100%', borderRadius: '50%' }}
      />

      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "#975b1a" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          {props.description}
        </Card.Text>
        <Button
            href={props.ghLink}
          target="_blank"
          className="fork-btn-inner"
        >
          <BsGithub style={{ fontSize: "1.2em" }} />{" "}

        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (

          <Button
            href={props.demoLink}
            target="_blank"
            className="fork-btn-inner ml-4"
          >
            DEMO

          </Button>

        )}
      </Card.Body>
    </Card>
    </>
  );
}
export default ProjectCards;
