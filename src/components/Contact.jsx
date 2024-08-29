import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact">
      <h2 className="text-start mb-4">Contact Me</h2>

      <Form className=" custom-placeholder">
        <Row className="">
          <Col md={6}>
            <Row className="">
              <Col md={12} className="mb-2">
                <Form.Group controlId="formName" className="">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="bg-dark border-2  "
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              <Col md={12} className="mb-1">
                <Form.Group
                  controlId="formEmail"
                  className="bg-dark border-2 border-white"
                >
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="bg-dark border-2  "
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Form.Group
              controlId="formMessage"
              className="bg-dark border-2 border-white"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                className=""
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <Button
            variant="dark"
            type="submit"
            className="mt-3 border-2 border-white w-25  "
          >
            Submit
          </Button>
        </div>
        div
      </Form>
    </Container>
  );
};

export default Contact;
