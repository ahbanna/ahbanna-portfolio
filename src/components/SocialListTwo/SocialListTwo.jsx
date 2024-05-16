import React from "react";
import "./SocialListTwo.css";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialListTwo = () => {
  return (
    <div className="secondary-social-area">
      <div className="secondary-social-list">
        <ul>
          <li>
            <a
              className="btn-hover-mask linkedin"
              href="https://www.linkedin.com/in/ahbanna/"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </li>
          <li>
            <a
              className="btn-hover-mask github"
              href="https://github.com/ahbanna"
            >
              <FaGithub></FaGithub>
            </a>
          </li>
          <li>
            <a
              className="btn-hover-mask facebook"
              href="https://www.facebook.com/hasanul.tutul/"
            >
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li>
            <a
              className="btn-hover-mask twitter"
              href="https://twitter.com/a_h_banna"
            >
              <FaTwitter></FaTwitter>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialListTwo;
