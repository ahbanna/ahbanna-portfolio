import React from "react";
import "./SocialList.css";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialList = () => {
  return (
    <div className="social-list">
      <ul>
        <li>
          <a className="linkedin" href="https://www.linkedin.com/in/ahbanna/">
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </li>
        <li>
          <a className="github" href="https://github.com/ahbanna">
            <FaGithub></FaGithub>
          </a>
        </li>
        <li>
          <a
            className="facebook"
            href="https://www.facebook.com/hasanul.tutul/"
          >
            <FaFacebookF></FaFacebookF>
          </a>
        </li>
        <li>
          <a className="twitter" href="https://twitter.com/a_h_banna">
            <FaTwitter></FaTwitter>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
