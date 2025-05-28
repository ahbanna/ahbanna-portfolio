import React from "react";
import "./SocialList.css";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialList = () => {
  return (
    <div className="social-list">
      <ul>
        <li>
          <a
            className="linkedin"
            target="blank"
            href="https://www.linkedin.com/in/ahbanna/"
          >
            <FaLinkedinIn></FaLinkedinIn> <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="github"
            target="blank"
            href="https://github.com/ahbanna"
          >
            <FaGithub></FaGithub> <span>Github</span>
          </a>
        </li>
        <li>
          <a
            className="facebook"
            target="blank"
            href="https://www.facebook.com/hasanul.tutul/"
          >
            <FaFacebookF></FaFacebookF> <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target="blank"
            href="https://x.com/alhasanulbanna"
          >
            <FaTwitter></FaTwitter>
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
