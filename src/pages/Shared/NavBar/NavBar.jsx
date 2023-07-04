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
            {/* <Image src="" alt="Sports Camp" width="100" height="40" /> */}
            <div class="logo d-flex align-items-center">
              <div class="logo-symbol">
                <a href="">B</a>
              </div>
              <div class="logo-text">
                <a href="">Banna</a>
              </div>
            </div>
            {/* TODO: there is a underline below logo */}
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mx-auto"> */}
            <Nav className="ml-auto menu-items">
              <NavLink to="/">Home</NavLink>
              <NavLink
                to="#about"
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                About Me
              </NavLink>
              <NavLink
                to="#services"
                onClick={() =>
                  document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Services
              </NavLink>
              <NavLink
                to="#skill"
                onClick={() =>
                  document.getElementById("skill-section").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Skill
              </NavLink>
              <NavLink
                to="#recent-projects"
                onClick={() =>
                  document.getElementById("recent-projects").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                Projects
              </NavLink>
              <NavLink to="/classes">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
