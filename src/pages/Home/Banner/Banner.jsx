import React from "react";
import bannaImg from "../../../assets/banner/banna.jpg";
import myPic from "../../../assets/banner/myPic.jpg";
import myPic2 from "../../../assets/banner/myPic2.png";
import heroBg from "../../../assets/banner/hero-bg.jpg";
import heroHand from "../../../assets/banner/hero-hand.webp";
import "./Banner.css";
import { FaDownload } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Typewriter from "../../../components/Typewriter/Typewriter";
import ReactTyped from "react-typed";
import SocialList from "../../../components/SocialList/SocialList";

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
              Hay! <img className="hero-hand-shake" src={heroHand} alt="" />
              I'm Hasanul Banna
            </p>
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
            <div className="banner-social">
              <span>Check out my</span>
              <SocialList></SocialList>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
