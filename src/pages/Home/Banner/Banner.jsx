import React from "react";
import bannaImg from "../../../assets/banner/banna.jpg";
import "./Banner.css";
import { FaTwitter, FaBehance, FaInstagram, FaFacebookF } from "react-icons/fa";

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
                  Downlaod CV
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
                  <a href="https://www.instagram.com/">
                    <FaInstagram></FaInstagram>
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
