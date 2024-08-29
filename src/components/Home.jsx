import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container id="home" className="d-flex align-items-center justify-content-center min-vh-100 text-center">
      <Row>
        <Col>
          <h1 className="display-3">Welcome to My Portfolio</h1>
          <p className="lead">I'm a [Your Profession], passionate about [Your Passion].</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
