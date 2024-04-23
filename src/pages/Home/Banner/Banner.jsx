import React from "react";
import bannaImg from "../../../assets/banner/banna.jpg";
import myPic from "../../../assets/banner/myPic.jpg";
import myPic2 from "../../../assets/banner/myPic2.png";
import heroHand from "../../../assets/banner/hero-hand.webp";
import "./Banner.css";
import { FaDownload } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Typewriter from "../../../components/Typewriter/Typewriter";
import ReactTyped from "react-typed";
import SocialList from "../../../components/SocialList/SocialList";
import { MdArrowRightAlt } from "react-icons/md";
import shapeOne from "../../../assets/shape-1.png";
import shapeFour from "../../../assets/shape-4.png";
import SocialListTwo from "../../../components/SocialListTwo/SocialListTwo";

const Banner = () => {
  return (
    <div className="banner-area" id="banner">
      <Container>
        <div className="banner-content">
          <div className="banner-img">
            <img src={bannaImg} alt="" />
            {/* <img src={myPic2} alt="" /> */}
          </div>
          <div className="banner-text">
            <p className="welcome-text">
              <img className="hero-hand-shake" src={heroHand} alt="" />
              Hello There!
            </p>
            <h2 className="dev-name">
              I'm Hasanul <span>Banna</span>
            </h2>
            <h3 className="animated-text">
              I'm{" "}
              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "Web Designer",
                  "Web Programmer",
                  "Full-stack Developer",
                ]}
                typeSpeed={100}
                loop
              />
            </h3>
            <p>
              I can provide clean code and pixel perfect design. I also make
              website more & more interactive with web animations.
            </p>
            {/* <div class="slider-btn">
              <button>
                <a
                  className="btn-resume"
                  href="/public/Resume of Md. Al Hasanul Banna.pdf"
                  download
                >
                  Get Resume <FaDownload></FaDownload>
                </a>
              </button>
              <button>
                <a class="btn-contact" href="">
                  contact
                </a>
              </button>
            </div> */}
            <a href="" className="cta-text">
              need this? lets talk <MdArrowRightAlt />
            </a>
            <div className="banner-social">
              {/* TODO: make improvement in social btn*/}
              <span>Check out my</span>
              <SocialList></SocialList>
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
