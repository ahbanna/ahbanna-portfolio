// import React from "react";
// import { Container, Image, Nav, Navbar } from "react-bootstrap";
// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import Headroom from "react-headroom";

// const NavBar = () => {
//   return (
//     <div className="header-area">
//       {/* <Headroom> */}
//       <Navbar collapseOnSelect expand="lg" variant="dark">
//         <Container>
//           <NavLink to="/">
//             <div class="logo d-flex align-items-center">
//               <div class="logo-symbol">
//                 <a href="">B</a>
//               </div>
//               <div class="logo-text">
//                 <a href="">Banna</a>
//               </div>
//             </div>
//             {/* TODO: there is a underline below logo */}
//           </NavLink>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             {/* <Nav className="mx-auto"> */}
//             <Nav className="ml-auto menu-items">
//               <NavLink to="/">Home</NavLink>
//               <NavLink
//                 to="#about"
//                 onClick={() =>
//                   document.getElementById("about").scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   })
//                 }
//               >
//                 About Me
//               </NavLink>
//               <NavLink
//                 to="#services"
//                 onClick={() =>
//                   document.getElementById("services").scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   })
//                 }
//               >
//                 Services
//               </NavLink>
//               <NavLink
//                 to="#skill"
//                 onClick={() =>
//                   document.getElementById("skill-section").scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   })
//                 }
//               >
//                 Skill
//               </NavLink>
//               <NavLink
//                 to="#recent-projects"
//                 onClick={() =>
//                   document.getElementById("recent-projects").scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   })
//                 }
//               >
//                 Projects
//               </NavLink>
//               <NavLink
//                 to="#contact"
//                 onClick={() =>
//                   document.getElementById("contact").scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                   })
//                 }
//               >
//                 Contact
//               </NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* </Headroom> */}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ToggleMode from "../../../components/ToggleMode/ToggleMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

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

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
     
  return (
    <div className={header ? "header-area active" : "header-area"}>
      <header>    
        <Container>
          {/* <Navbar collapseOnSelect expand="lg" variant="dark"> */}
          <Navbar>
            <div className="logo d-flex align-items-center">
              <div className="logo-symbol">
                <NavLink to="/">B</NavLink>
              </div>
              <div className="logo-text">
                <NavLink to="/">Banna</NavLink>
              </div>
            </div>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            {/* Hamburger icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
              <HiMenuAlt1 />
            </div>
            <Nav className={`menu-items ${showMenu ? "show" : ""}`}>
              <NavLink to="/">Home</NavLink>
              {/* <NavLink to="#about" onClick={() => scrollToSection("about")}>
                About Me
              </NavLink> */}
              <NavLink to="/" onClick={toggleMenu}>
                About Me
              </NavLink>
              {/* <NavLink
                to="#services"
                onClick={() => scrollToSection("services")}
              >
                Services
              </NavLink> */}
              <NavLink to="/" onClick={toggleMenu}>
                Services
              </NavLink>
              {/* <NavLink to="#skill" onClick={() => scrollToSection("skill")}>
                Skill
              </NavLink> */}
              <NavLink to="/" onClick={toggleMenu}>
                Skill
              </NavLink>
              {/* <NavLink
                to="#recent-projects"
                onClick={() => scrollToSection("recent-projects")}
              >
                Projects
              </NavLink> */}
              <NavLink to="#recent-projects" onClick={toggleMenu}>
                Projects
              </NavLink>
              {/* <NavLink to="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </NavLink> */}
              <NavLink to="#contact" onClick={toggleMenu}>
                Contact
              </NavLink> 
            </Nav>

            {/* </Navbar.Collapse> */}
            <ToggleMode></ToggleMode>
          </Navbar>
        </Container>
      </header>
    </div>
  );
};

export default NavBar;
