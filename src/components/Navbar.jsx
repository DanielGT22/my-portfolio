import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark"   className="custom-navbar ">
      <Navbar.Brand href="#" className=" ">My Portfolio</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
     
    </Navbar>
  );
};

export default Navigation;
