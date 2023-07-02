import React from "react";
import "./Skill.css";
import figma from "../../../assets/skills/figma.png";
import wordpress from "../../../assets/skills/wordpress.png";
import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import js from "../../../assets/skills/js.png";
import react from "../../../assets/skills/react.png";
import nodejs from "../../../assets/skills/nodejs.png";
import mongodb from "../../../assets/skills/mongodb.png";
import shopify from "../../../assets/skills/shopify.png";
import firebase from "../../../assets/skills/firebase.png";
import git from "../../../assets/skills/git.png";
import github from "../../../assets/skills/github.png";
import jquery from "../../../assets/skills/jquery.png";
import sass from "../../../assets/skills/sass.png";
const Skill = () => {
  return (
    <div className="skill-area">
      <div className="container">
        <div className="section-title">
          <p>Skill</p>
          <h2>My Skills</h2>
          <div className="section-underline"></div>
        </div>
        <div className="skill-img">
          <div className="skill-item">
            <div className="skill-icon">
              <img src={figma} alt="" />
            </div>
            <span>Figma</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={html} alt="" />
            </div>
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={css} alt="" />
            </div>
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={sass} alt="" />
            </div>
            <span>Sass</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={js} alt="" />
            </div>
            <span>JS</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={jquery} alt="" />
            </div>
            <span>Jquery</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={react} alt="" />
            </div>
            <span>React</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={nodejs} alt="" />
            </div>
            <span>NodeJs</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={mongodb} alt="" />
            </div>
            <span>MongoDB</span>
          </div>

          <div className="skill-item">
            <div className="skill-icon">
              <img src={firebase} alt="" />
            </div>
            <span>Firebase</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={git} alt="" />
            </div>
            <span>Git</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={github} alt="" />
            </div>
            <span>Github</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={wordpress} alt="" />
            </div>
            <span>WordPress</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={shopify} alt="" />
            </div>
            <span>Shopify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
