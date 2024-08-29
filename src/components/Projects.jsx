import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project-image-url-1.jpg" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>A brief description of Project 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project-image-url-2.jpg" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>A brief description of Project 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="project-image-url-3.jpg" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>A brief description of Project 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
