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
import git from "../../../assets/skills/git.png";
import github from "../../../assets/skills/github.png";
import sass from "../../../assets/skills/sass.png";
import ga4 from "../../../assets/skills/ga4.png";
import gtm from "../../../assets/skills/gtm.png";
import gads from "../../../assets/skills/gads.png";
import fb from "../../../assets/skills/fb.png";
import next from "../../../assets/skills/next.png";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
const Skill = () => {
  return (
    <div className="skill-area" id="skills">
      <Container>
        <SectionTitle
          text="my skills"
          title="Let’s Explore Popular Skills & Experience"
        ></SectionTitle>
        <div
          className="all-skill-imges"
          // data-aos="zoom-out-up"
          // data-aos-duration="1500"
        >
          {/* <div className="skill-item">
            <div className="skill-icon">
              <img src={figma} alt="" />
            </div>
            <span>Figma</span>
          </div> */}
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
          {/* <div className="skill-item">
            <div className="skill-icon">
              <img src={sass} alt="" />
            </div>
            <span>Sass</span>
          </div> */}
          <div className="skill-item">
            <div className="skill-icon">
              <img src={js} alt="" />
            </div>
            <span>JS</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={react} alt="" />
            </div>
            <span>React</span>
          </div>
          {/* <div className="skill-item">
            <div className="skill-icon">
              <img src={nodejs} alt="" />
            </div>
            <span>NodeJs</span>
          </div> */}
          <div className="skill-item">
            <div className="skill-icon">
              <img src={next} alt="" />
            </div>
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={mongodb} alt="" />
            </div>
            <span>MongoDB</span>
          </div>
          {/* <div className="skill-item">
            <div className="skill-icon">
              <img src={git} alt="" />
            </div>
            <span>Git</span>
          </div> */}
          {/* <div className="skill-item">
            <div className="skill-icon">
              <img src={github} alt="" />
            </div>
            <span>Github</span>
          </div> */}
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
          <div className="skill-item">
            <div className="skill-icon">
              <img src={gtm} alt="" />
            </div>
            <span>GTM</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={ga4} alt="" />
            </div>
            <span>GA4</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={fb} alt="" />
            </div>
            <span>FB Pixel</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon">
              <img src={gads} alt="" />
            </div>
            <span>Googs Ads</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
