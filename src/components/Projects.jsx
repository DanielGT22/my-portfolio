import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  const [isHoveredPButton1, setIsHoveredPButton1] = useState(false);
  const [isHoveredPButton2, setIsHoveredPButton2] = useState(false);
  const [isHoveredPButton3, setIsHoveredPButton3] = useState(false);
  const [isHoveredPButton4, setIsHoveredPButton4] = useState(false);
  const [isHoveredPButton5, setIsHoveredPButton5] = useState(false);
  const [isHoveredPButton6, setIsHoveredPButton6] = useState(false);
  return (
    <Container id="projects">
      <h2 className="text-start mb-5 pb-3">My Projects</h2>
      <h3 className="pb-5 ms-3">Software Development</h3>
      <Row className="mb-5">
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton1 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton1
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton1(true)}
                    onMouseLeave={() => setIsHoveredPButton1(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Netflix Clone</Card.Title>
              <hr />
              <Card.Text>
                Using bootstrap and API calls to replicate the netflix interface
              </Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton2 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton2
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton2(true)}
                    onMouseLeave={() => setIsHoveredPButton2(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Spotify Clone</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton3 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton3
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton3(true)}
                    onMouseLeave={() => setIsHoveredPButton3(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>BoardGames</Card.Title>
              <hr />
              <Card.Text>Just some board games.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton4 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton4
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton4(true)}
                    onMouseLeave={() => setIsHoveredPButton4(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton5 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton5
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton5(true)}
                    onMouseLeave={() => setIsHoveredPButton5(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton6 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton6
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton6(true)}
                    onMouseLeave={() => setIsHoveredPButton6(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3 className="pb-5 ms-3">Photography</h3>
      <Row className="mb-5">
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton1 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton1
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton1(true)}
                    onMouseLeave={() => setIsHoveredPButton1(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Netflix Clone</Card.Title>
              <hr />
              <Card.Text>This Project shows my </Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton2 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton2
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton2(true)}
                    onMouseLeave={() => setIsHoveredPButton2(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton3 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton3
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton3(true)}
                    onMouseLeave={() => setIsHoveredPButton3(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton4 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton4
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton4(true)}
                    onMouseLeave={() => setIsHoveredPButton4(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton5 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton5
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton5(true)}
                    onMouseLeave={() => setIsHoveredPButton5(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton6 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton6
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton6(true)}
                    onMouseLeave={() => setIsHoveredPButton6(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3 className="pb-5 ms-3">Music</h3>
      <Row className="mb-5">
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton1 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton1
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton1(true)}
                    onMouseLeave={() => setIsHoveredPButton1(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton2 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton2
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton2(true)}
                    onMouseLeave={() => setIsHoveredPButton2(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton3 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton3
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton3(true)}
                    onMouseLeave={() => setIsHoveredPButton3(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton4 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton4
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton4(true)}
                    onMouseLeave={() => setIsHoveredPButton4(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton5 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton5
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton5(true)}
                    onMouseLeave={() => setIsHoveredPButton5(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton6 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton6
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton6(true)}
                    onMouseLeave={() => setIsHoveredPButton6(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h3 className="pb-5 ms-3">Miscelanious</h3>
      <Row className="mb-5">
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton1 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton1
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton1(true)}
                    onMouseLeave={() => setIsHoveredPButton1(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton2 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton2
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton2(true)}
                    onMouseLeave={() => setIsHoveredPButton2(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton3 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton3
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton3(true)}
                    onMouseLeave={() => setIsHoveredPButton3(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton4 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton4
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton4(true)}
                    onMouseLeave={() => setIsHoveredPButton4(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton5 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton5
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton5(true)}
                    onMouseLeave={() => setIsHoveredPButton5(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Projects */}
        <Col xs={12} md={4}>
          <Card className="mb-4 bg-dark text-white border-2 border-white p-2">
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <hr />
              <Card.Text>Starting it simple with a weather app.</Card.Text>

              <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                  {" "}
                  <button
                    className=" w-100 h-100 p-1 text-white rounded"
                    style={{
                      border: ` 2px solid ${
                        isHoveredPButton6 ? "orange" : "white"
                      }`,
                      backgroundColor: `${
                        isHoveredPButton6
                          ? "rgb(254, 144, 0)"
                          : "rgba(255, 0, 0, 0)"
                      }`,
                    }}
                    onMouseEnter={() => setIsHoveredPButton6(true)}
                    onMouseLeave={() => setIsHoveredPButton6(false)}
                  >
                    Check
                  </button>{" "}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
