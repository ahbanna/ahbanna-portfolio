import React from "react";
import bannaImg from "../../../assets/banner/banna.jpg";
import "./Banner.css";
import {
  FaTwitter,
  FaBehance,
  FaFacebookF,
  FaDownload,
  FaGithub,
} from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 banner-img">
            <img src={bannaImg} alt="" />
          </div>
          <div className="col-lg-6 banner-text">
            <p>Hy ! I am Al Hasanul Banna</p>
            <h3>Full Stack Web Developer</h3>
            <div class="slider-btn">
              <button>
                <a className="btn-resume" href="">
                  Get Resume <FaDownload></FaDownload>
                </a>
              </button>
              <button>
                <a class="btn-contact" href="">
                  contact
                </a>
              </button>
            </div>
            <div className="banner-social">
              <span>Check out my: </span>
              <ul className="social-icon">
                <li>
                  <a href="https://github.com/ahbanna">
                    <FaGithub></FaGithub>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ahbanna">
                    <GrLinkedin></GrLinkedin>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/hasanul.tutul/">
                    <FaFacebookF></FaFacebookF>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/home">
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/">
                    <FaBehance></FaBehance>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
