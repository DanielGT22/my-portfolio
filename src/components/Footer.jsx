import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="py-5 mb-0 bg-dark text-light">
      <Container>
        <hr />
        <Row>
          {/* Contact Form Section */}
          <Col md={6} className="px-5">
            <h3 className="text-center mb-4" style={{ fontWeight: "600" }}>
              Get in Touch
            </h3>
            <Form className="custom-placeholder  p-4 rounded shadow-sm">
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="bg-white border-0 rounded"
                      style={{ padding: "12px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      className="bg-white border-0 rounded"
                      style={{ padding: "12px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your Message"
                      className="bg-white border-0 rounded"
                      style={{ padding: "12px" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="d-flex justify-content-center">
                  <Button
                    variant="dark"
                    type="submit"
                    className="px-4 py-2 border-white"
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          {/* Social Media Section */}
          <Col
            md={6}
            className="px-5 mt-5 mt-md-0 d-flex flex-column align-items-center"
          >
            <h3 className="text-center mb-5" style={{ fontWeight: "600" }}>
              Follow Me
            </h3>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                className="text-light mx-3 text-center text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={40} className="footer-icon" />
                <br />
                <p className="m-2">
                  <strong className="text-decoration-none ">Facebook</strong>
                </p>
              </a>
              <a
                href="https://twitter.com"
                className="text-light mx-3 text-center text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={40} className="footer-icon" />
                <br />
                <p className="m-2">
                  <strong className="text-decoration-none ">Twitter/X</strong>
                </p>
              </a>
              <a
                href="https://youtube.com"
                className="text-light mx-3 text-center text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={40} className="footer-icon" />
                <br />
                <p className="m-2">
                  <strong className="text-decoration-none ">Youtube</strong>
                </p>
              </a>
              <a
                href="mailto:example@example.com"
                className="text-light mx-3 text-center text-decoration-none"
              >
                <FaEnvelope size={40} className="footer-icon" />
                <br />
                <p className="m-2">
                  <strong className="text-decoration-none ">Mail</strong>
                </p>
              </a>
              <a
                href="https://instagram.com"
                className="text-light mx-3 text-center text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={40} className="footer-icon" />
                <br />
                <p className="m-2">
                  <strong className="text-decoration-none ">Instragram</strong>
                </p>
              </a>
            </div>
          </Col>
        </Row>

        {/* Back to Top and Copyright */}
        <Row className="text-center">
          <Col>
            <Button
              variant="secondary"
              className="mb-3"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <FaArrowUp />
            </Button>
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Your Website. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Additional Styling */}
      <style jsx>{`
        .footer-icon {
          transition: color 0.3s ease-in-out;
        }
        .footer-icon:hover {
          color: #007bff; /* Adds hover effect on icons */
        }
        .form-control:focus {
          box-shadow: none;
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default Footer;
