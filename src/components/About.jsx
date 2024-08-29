import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src="your-photo-url.jpg" roundedCircle className="img-fluid mb-4" />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <p className="lead">I’m a [Your Profession] with experience in [Your Skills]. I love working on [Your Interests] and am always eager to learn more.</p>
          <p>[A few more details about your background, experience, and aspirations.]</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
