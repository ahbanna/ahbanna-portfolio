import React from "react";
import "./AboutMe.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="aboutme-area">
      <div className="container">
        <div className="section-title">
          <p>Some Lines About My Self</p>
          <h2>ABOUT ME</h2>
        </div>

        <Tabs>
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Contact Details</Tab>
          </TabList>
          <TabPanel>
            <div>
              <p>
                A passionate Full Stack Web Developer with a primary focus on
                React.js front-end development. With a strong foundation in
                HTML, CSS, and JavaScript, I possess extensive expertise in
                building responsive and mobile-friendly websites. React.js is my
                go-to framework, and I thrive on leveraging its power to develop
                dynamic and interactive front-end solutions.
              </p>
              <p>
                While my main focus is on front-end development, my skill set
                extends to the back-end as well. I am proficient in Node.js and
                have experience working with databases like MongoDB, which
                allows me to seamlessly integrate the front-end with the
                server-side logic.
              </p>
              <p>
                Throughout my career, I have worked on a variety of projects,
                ranging from small business websites to complex web
                applications. I have collaborated closely with clients,
                understanding their unique needs and translating them into
                practical solutions. I take pride in my ability to communicate
                effectively and deliver projects on time, ensuring client
                satisfaction.
              </p>
              <p>
                Outside of coding, I enjoy staying updated with the latest
                industry trends and exploring new technologies. This curiosity
                fuels my continuous learning journey, allowing me to deliver
                cutting-edge solutions to my clients.
              </p>
            </div>
            <div className="about-me-info">
              <div>
                <p>
                  <span>Name: </span> Al Hasanul Banna
                </p>
                <p>
                  <span>Email: </span> alhasanulbanna@gmail.com
                </p>
                <p>
                  <span>Address: </span> Dhaka, Bangladesh
                </p>
              </div>
              <div>
                <p>
                  <span>Age: </span> 27
                </p>
                <p>
                  <span>Phone: </span> +8801723 659531
                </p>
                <p>
                  <span>Nationality: </span> Bangladeshi
                </p>
              </div>
            </div>
            <button>
              <a
                className="btn-resume"
                href="/public/Resume of Md. Al Hasanul Banna.pdf"
                download
              >
                Get Resume <FaDownload></FaDownload>
              </a>
            </button>
          </TabPanel>
          <TabPanel>
            <div className="contact-part">
              <div className="contact-icon">
                <FaPhone></FaPhone>
              </div>
              <div className="contact-info">
                <p>
                  <span>Phone No:</span>
                </p>
                <p>+8801723659531</p>
              </div>
            </div>
            <div className="contact-part">
              <div className="contact-icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <div className="contact-info">
                <p>
                  <span>Email:</span>
                </p>
                <p>alhasanulbanna@gmail.com</p>
              </div>
            </div>
            <div className="contact-part">
              <div className="contact-icon">
                <FaLocationArrow></FaLocationArrow>
              </div>
              <div className="contact-info">
                <p>
                  <span>Address: </span>
                </p>
                <p>Saya bithi Road# 3, House# 4, Dahka, Bangladesh</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutMe;
