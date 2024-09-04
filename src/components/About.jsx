import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { LoremIpsum } from "react-lorem-ipsum";
const About = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div>
      <Container id="about" className="py-4">
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <h1 className="my-5 py-5">DANIEL GRUJIC</h1>
            <hr className="pb-5" />
            <div className="pb-5 mb-5">
              <Row>
                <Col xs={6} md={3} className="p-1">
                  <button
                    className=" w-100 h-100 py-3 text-white"
                    style={{
                      border: ` 2px solid ${
                        isHovered1 ? "rgb(254, 144, 0)" : "white"
                      }`,
                      backgroundColor: `${
                        isHovered1 ? "rgb(254, 144, 0)" : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    Title
                  </button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <button
                    className=" w-100 h-100 py-3 text-white"
                    style={{
                      border: ` 2px solid ${
                        isHovered2 ? "rgb(254, 144, 0)" : "white"
                      }`,
                      backgroundColor: `${
                        isHovered2 ? "rgb(254, 144, 0)" : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    Projects
                  </button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <button
                    className=" w-100 h-100 py-3 text-white"
                    style={{
                      border: ` 2px solid ${
                        isHovered3 ? "rgb(254, 144, 0)" : "white"
                      }`,
                      backgroundColor: `${
                        isHovered3 ? "rgb(254, 144, 0)" : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                  >
                    About Me
                  </button>
                </Col>
                <Col xs={6} md={3} className="p-1">
                  <button
                    className=" w-100 h-100 py-3 text-white"
                    style={{
                      border: ` 2px solid ${
                        isHovered4 ? "rgb(254, 144, 0)" : "white"
                      }`,
                      backgroundColor: `${
                        isHovered4 ? "rgb(254, 144, 0)" : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                  >
                    Contact
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Image src="" roundedCircle />
            <LoremIpsum p={1} />
          </Col>
        </Row>
      </Container>
      <Container className="pb-5 mb-3">
        <LoremIpsum p={3} />
      </Container>
    </div>
  );
};

export default About;
