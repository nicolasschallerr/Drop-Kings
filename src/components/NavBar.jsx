import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          DropsKings
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/celulares">
              celulares
            </Nav.Link>
            <Nav.Link as={Link} to="/category/computadoras">
              computadoras
            </Nav.Link>
            <Nav.Link as={Link} to="/category/televisores">
              televisores
            </Nav.Link>
            <Nav.Link as={Link} to="/category/auriculares">
              auriculares
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
