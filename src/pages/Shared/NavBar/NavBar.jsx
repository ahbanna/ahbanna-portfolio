import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header-area">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <NavLink to="/">
            <Image src="" alt="Sports Camp" width="100" height="40" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mx-auto"> */}
            <Nav className="ml-auto menu-items">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutme">About Me</NavLink>
              <NavLink to="/classes">Services</NavLink>
              <NavLink to="/classes">Skill</NavLink>
              <NavLink to="/classes">Blog</NavLink>
              <NavLink to="/classes">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
