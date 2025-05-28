// import React, { useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import ToggleMode from "../../../components/ToggleMode/ToggleMode";
// import { HiMenuAlt1 } from "react-icons/hi";
// import logo from "../../../assets/logo.png";

// const NavBar = () => {
//   const [header, setHeader] = useState(false);
//   const [showMenu, setShowMenu] = useState(false);

//   // Hamburger menu
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   // Toggle button
//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setHeader(true);
//     } else {
//       setHeader(false);
//     }
//   };
//   window.addEventListener("scroll", changeBackground);

//   // Smooth scroll function with improved error handling
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       // Check if element exists before scrolling
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     } else {
//       console.error(`Element with id "${id}" not found in the DOM.`);
//     }
//   };

//   return (
//     <div className={header ? "header-area active" : "header-area"}>
//       <header>
//         <Container>
//           <Navbar>
//             <div className="logo">
//               <NavLink to="/">
//                 <img src={logo} alt="" srcset="" />
//               </NavLink>
//             </div>
//             {/* Hamburger icon */}
//             <div className="menu-wrapper">
//               <div className="hamburger-menu" onClick={toggleMenu}>
//                 <HiMenuAlt1 />
//               </div>
//               <Nav className={`menu-items ${showMenu ? "show" : ""}`}>
//                 <NavLink
//                   to="#banner"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("banner");
//                   }}
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="#about"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("about");
//                   }}
//                 >
//                   About Me
//                 </NavLink>
//                 <NavLink
//                   to="#services"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("services");
//                   }}
//                 >
//                   Services
//                 </NavLink>
//                 <NavLink
//                   to="#skills"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("skills");
//                   }}
//                 >
//                   Skill
//                 </NavLink>
//                 <NavLink
//                   to="#projects"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("projects");
//                   }}
//                 >
//                   Projects
//                 </NavLink>
//                 <NavLink
//                   to="#contact"
//                   onClick={() => {
//                     toggleMenu();
//                     scrollToSection("contact");
//                   }}
//                 >
//                   Contact
//                 </NavLink>
//               </Nav>
//             </div>
//             <ToggleMode></ToggleMode>
//           </Navbar>
//         </Container>
//       </header>
//     </div>
//   );
// };

// export default NavBar;

// 2nd

import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ToggleMode from "../../../components/ToggleMode/ToggleMode";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const [header, setHeader] = useState(false);

  // Scroll listener for background toggle
  useEffect(() => {
    const changeBackground = () => {
      setHeader(window.scrollY >= 80);
    };

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  // Menu items
  const menuItems = [
    { id: "banner", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skill" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={header ? "header-area active" : "header-area"}>
      <header>
        <Container>
          <Navbar expand="lg" className="menu-wrapper">
            {/* Logo */}
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>

            {/* Hamburger icon */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />

            {/* Offcanvas Menu */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="menu-items justify-content-end flex-grow-1 pe-3">
                  {menuItems.map((item) => (
                    <Nav.Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      {item.label}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* Dark/Light Toggle */}
            <ToggleMode />
          </Navbar>
        </Container>
      </header>
    </div>
  );
};

export default NavBar;
