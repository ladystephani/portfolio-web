import React from "react";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" id="header">
      <Container>
        <Navbar.Brand href="#home" class="nav-text">
          Zhe Qi Li
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About" class="nav-text">
              About
            </Nav.Link>
            <Nav.Link href="#" class="nav-text">
              Resume
            </Nav.Link>
            <Nav.Link href="#Projects" class="nav-text">
              Projects
            </Nav.Link>
            <Nav.Link href="#Contact" class="nav-text">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
