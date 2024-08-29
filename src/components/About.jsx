import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container id="about " className="py-4">
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <h1>DANIEL GRUJIC</h1>
            <hr></hr>
            <div className="p-1">
              <Row>
                <Col xs={6} md={3} className="p-1">
                  <Button
                    className="w-100   h-100 bg-dark border border-2 border-white "
                    style={{}}
                  >
                    Title
                  </Button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <Button
                    className="w-100   h-100 bg-dark border border-2 border-white "
                    style={{}}
                  >
                    Projects
                  </Button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <Button
                    className="w-100   h-100 bg-dark border border-2 border-white "
                    style={{}}
                  >
                    About Me
                  </Button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <Button
                    className="w-100   h-100 bg-dark border border-2 border-white "
                    style={{}}
                  >
                    Contact
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Image src="" roundedCircle className="" />
            <p className="text-danger">A</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Lorem</h1>
      </Container>
    </div>
    
  );
};

export default About;
