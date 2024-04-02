// import React from "react";
// import "./About.css";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
// import { FaDownload } from "react-icons/fa";
// import Skill from "../Home/Skill/Skill";
// import AboutMe from "../../components/AboutMe/AboutMe";

// const About = () => {
//   return (
//     <div className="about-area" id="about">
//       <div className="container">
//         <div className="section-title">
//           <p>Some Lines About My Self</p>
//           <h2>ABOUT ME</h2>
//         </div>

//         <Tabs>
//           <TabList>
//             <Tab>About Me</Tab>
//             <Tab>Contact Details</Tab>
//             <Tab>Skill</Tab>
//           </TabList>
//           <TabPanel>
//             <AboutMe></AboutMe>
//           </TabPanel>
//           <TabPanel>
//             <div className="contact-part">
//               <div className="contact-icon">
//                 <FaPhone></FaPhone>
//               </div>
//               <div className="contact-info">
//                 <p>
//                   <span>Phone No:</span>
//                 </p>
//                 <p>+8801723659531</p>
//               </div>
//             </div>
//             <div className="contact-part">
//               <div className="contact-icon">
//                 <FaEnvelope></FaEnvelope>
//               </div>
//               <div className="contact-info">
//                 <p>
//                   <span>Email:</span>
//                 </p>
//                 <p>alhasanulbanna@gmail.com</p>
//               </div>
//             </div>
//             <div className="contact-part">
//               <div className="contact-icon">
//                 <FaLocationArrow></FaLocationArrow>
//               </div>
//               <div className="contact-info">
//                 <p>
//                   <span>Address: </span>
//                 </p>
//                 <p>Saya bithi Road# 3, House# 4, Dahka, Bangladesh</p>
//               </div>
//             </div>
//             <div className="about-me-info">
//               <div>
//                 <p>
//                   <span>Name: </span> Al Hasanul Banna
//                 </p>
//                 <p>
//                   <span>Email: </span> alhasanulbanna@gmail.com
//                 </p>
//                 <p>
//                   <span>Address: </span> Dhaka, Bangladesh
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <span>Age: </span> 27
//                 </p>
//                 <p>
//                   <span>Phone: </span> +8801723 659531
//                 </p>
//                 <p>
//                   <span>Nationality: </span> Bangladeshi
//                 </p>
//               </div>
//             </div>
//             <button>
//               <a
//                 className="btn-resume"
//                 href="/public/Resume of Md. Al Hasanul Banna.pdf"
//                 download
//               >
//                 Get Resume <FaDownload></FaDownload>
//               </a>
//             </button>
//           </TabPanel>
//           <TabPanel>
//             <Skill></Skill>
//           </TabPanel>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import SectionTitle from "../../components/SecionTitle/SecionTitle";
import { Container } from "react-bootstrap";
import "./About.css";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-area">
      <Container>
        <SectionTitle
          text="some lines about myself"
          title="about me"
        ></SectionTitle>
        <div className="about-area-content">
          <div className="about-left">
            <h5>
              <span>Code, Coffee, and Creativity</span>: A Developer's Narrative
            </h5>
            <p>
              Hi, my name is <strong className="color-white">Banna</strong> and
              a passionate Frontend Developer. I’ve spent most of my waking
              hours for the last 3 years designing, programming and operating
              websites go beyond with exclusive designer. Apart from this I love
              to travel, mentor designers, review design portfolios & read books
              on everything related to design & development.
            </p>
            <ul className="details-info">
              <li>
                Name <span>:</span> <strong>Hasanul Banna</strong>
              </li>
              <li>
                Nationality <span>:</span> <strong>Bangladeshi</strong>
              </li>
              <li>
                Email <span>:</span>
                <strong>alhasanulbanna@gmail.com</strong>
              </li>
              <li>
                Phone <span>:</span>
                <strong>+(880)1723659531</strong>
              </li>
              <li>
                Experience <span>:</span>
                <strong>3 years</strong>
              </li>
              <li>
                Freelance <span>:</span>
                <strong>Available</strong>
              </li>
              <li>
                Language <span>:</span> <strong>English</strong>
              </li>
            </ul>
            <div className="resume-btn">
              <button>
                <a
                  className="btn-resume"
                  href="/public/Resume of Md. Al Hasanul Banna.pdf"
                  download
                >
                  Get Resume <FaDownload></FaDownload>
                </a>
              </button>
            </div>
          </div>
          <div className="about-right">
            <div class="experience-years">
              <b>3+</b>
              <h5>Years Of Experience</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
