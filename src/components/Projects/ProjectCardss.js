import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Card className="project-card-view">
      <div 
        onClick={() => setShowModal(true)}
        style={{ 
          width: '100%', 
          aspectRatio: '16/10',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a2e',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ 
            objectFit: 'contain', 
            width: '100%', 
            height: '100%',
            pointerEvents: 'none'
          }}
        />
      </div>

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

    {/* Image Modal */}
    <Modal 
      show={showModal} 
      onHide={() => setShowModal(false)}
      centered
      size="lg"
      className="image-modal"
    >
      <Modal.Header closeButton style={{ backgroundColor: '#1a1a2e', borderColor: '#975b1a' }}>
        <Modal.Title style={{ color: '#975b1a' }}>Project Image</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#1a1a2e', padding: '20px', textAlign: 'center' }}>
        <img 
          src={props.imgPath} 
          alt="project-full" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '70vh',
            height: 'auto',
            borderRadius: '8px',
            objectFit: 'contain'
          }} 
        />
      </Modal.Body>
    </Modal>
    </>
  );
}
export default ProjectCards;
