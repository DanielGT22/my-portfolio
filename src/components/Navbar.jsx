import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark"   className="ps-3 position-sticky top-0 z-3">
      <Navbar.Brand href="#" className=" ">My Portfolio</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
     
    </Navbar>
  );
};

export default Navigation;
