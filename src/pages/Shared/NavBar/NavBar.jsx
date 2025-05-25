import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ToggleMode from "../../../components/ToggleMode/ToggleMode";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const [header, setHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Hamburger menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Toggle button
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // Smooth scroll function with improved error handling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Check if element exists before scrolling
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Element with id "${id}" not found in the DOM.`);
    }
  };

  return (
    <div className={header ? "header-area active" : "header-area"}>
      <header>
        <Container>
          <Navbar>
            {/* <div className="logo d-flex align-items-center">
              <div className="logo-symbol">
                <NavLink to="/">B</NavLink>
              </div>
              <div className="logo-text">
                <NavLink to="/">Banna</NavLink>
              </div> 
            </div> */}
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="" srcset="" />
              </NavLink>
            </div>
            {/* Hamburger icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
              <HiMenuAlt1 />
            </div>
            <Nav className={`menu-items ${showMenu ? "show" : ""}`}>
              <NavLink
                to="#banner"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("banner");
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="#about"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("about");
                }}
              >
                About Me
              </NavLink>
              <NavLink
                to="#services"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("services");
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="#skills"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("skills");
                }}
              >
                Skill
              </NavLink>
              <NavLink
                to="#projects"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("projects");
                }}
              >
                Projects
              </NavLink>
              <NavLink
                to="#contact"
                onClick={() => {
                  toggleMenu();
                  scrollToSection("contact");
                }}
              >
                Contact
              </NavLink>
            </Nav>
            <ToggleMode></ToggleMode>
          </Navbar>
        </Container>
      </header>
    </div>
  );
};

export default NavBar;
