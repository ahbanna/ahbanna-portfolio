import React from "react";
import SectionTitle from "../../components/SecionTitle/SecionTitle";
import { Container } from "react-bootstrap";
import "./About.css";
import { FaDownload } from "react-icons/fa";
import aboutBtnImg1 from "../../assets/about/btn-image1.png";
import abotDotShape from "../../assets/about/about-dot-shape.png";
import shapeThree from "../../../src/assets/shape-3.png";
import shapeFour from "../../../src/assets/shape-4.png";
import shapeFive from "../../../src/assets/shape-5.png";
import BorderCircle from "../../components/BorderCircle/BorderCircle";

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
            {/* <h5>
              <span>Code, Coffee, and Creativity</span>: A Developer's Narrative
            </h5> */}
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
            {/*
            TODO:
            change btn text and image 
            */}
            <div class="experience-years">
              <b>3+</b>
              <h5>Years Of Experience</h5>
            </div>
            <div className="about-btn one">
              <img src={aboutBtnImg1} alt="" srcset="" />
              <h6>Web Designer</h6>
            </div>
            <div className="about-btn two">
              <img src={aboutBtnImg1} alt="" srcset="" />
              <h6>Web Designer</h6>
            </div>
            <div className="about-btn three">
              <img src={aboutBtnImg1} alt="" srcset="" />
              <h6>Web Designer</h6>
            </div>
            <div className="about-dot-shape one">
              <img src={abotDotShape} alt="" srcset="" />
            </div>
            <div className="about-dot-shape two">
              <img src={abotDotShape} alt="" srcset="" />
            </div>
            <div className="shape-three">
              <img src={shapeThree} alt="" srcset="" />
            </div>
            <BorderCircle></BorderCircle>
            <div className="shape-four">
              <img src={shapeFour} alt="" srcset="" />
            </div>
            <div className="shape-five">
              <img src={shapeFive} alt="" srcset="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
