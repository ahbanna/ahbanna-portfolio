import React from "react";
import bannaImg from "../../../assets/banner/banna.jpg";
import heroHand from "../../../assets/banner/hero-hand.webp";
import "./Banner.css";
import { Container } from "react-bootstrap";
import ReactTyped from "react-typed";
import { MdArrowRightAlt } from "react-icons/md";
import shapeOne from "../../../assets/shape-1.png";
import shapeFour from "../../../assets/shape-4.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="banner-area" id="banner">
      <Container>
        <div className="banner-content">
          <div className="banner-img">
            <img
              src={bannaImg}
              alt=""
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="banner-text"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p className="welcome-text">
              <img className="hero-hand-shake" src={heroHand} alt="" />
              Hello There!
            </p>
            <h2
              className="dev-name"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              I'm Hasanul <span>Banna</span>
            </h2>
            <h3 className="animated-text">
              I'm{" "}
              <ReactTyped
                strings={[
                  "Web Developer",
                  "Conversion Tracking Specialist",
                  "Web Programmer",
                ]}
                typeSpeed={100}
                loop
              />
            </h3>
            <p>
              I build fast, interactive websites with clean, pixel-perfect code
              using modern front-end and full-stack technologies. I also
              specialize in conversion tracking using GA4, GTM, and Meta Pixel
              to help businesses measure what matters.
            </p>
            <a
              href="https://wa.me/8801723659531"
              target="blank"
              className="cta-text"
            >
              need this? lets talk <MdArrowRightAlt />
            </a>
            <div className="view-works-btn">
              <PrimaryButton
                text="view my works"
                link="https://www.behance.net/ahbanna/projects"
              ></PrimaryButton>
            </div>
            <div className="shape-img">
              <img src={shapeOne} alt="" srcset="" />
            </div>
            <div className="shape-four">
              <img src={shapeFour} alt="" srcset="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
