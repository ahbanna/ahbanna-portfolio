import React from "react";
import "./SocialListTwo.css";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialListTwo = () => {
  return (
    <div>
      <div className="social-list-two">
        <ul>
          <li>
            <a
              className="btn-hover-mask"
              href="https://www.linkedin.com/in/ahbanna/"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </li>
          <li>
            <a className="btn-hover-mask" href="https://github.com/ahbanna">
              <FaGithub></FaGithub>
            </a>
          </li>
          <li>
            <a
              className="btn-hover-mask"
              href="https://www.facebook.com/hasanul.tutul/"
            >
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li>
            <a className="btn-hover-mask" href="https://twitter.com/a_h_banna">
              <FaTwitter></FaTwitter>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialListTwo;
