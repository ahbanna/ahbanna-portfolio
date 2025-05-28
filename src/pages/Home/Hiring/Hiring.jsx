import React from "react";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import { Container } from "react-bootstrap";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./Hiring.css";

const Hiring = () => {
  return (
    <div className="hiring-area">
      <Container>
        <div>
          <SectionTitle
            text="Have You Any Project?"
            title="I am Available for Freelance Hire"
          ></SectionTitle>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <SecondaryButton
            text="hire me"
            link={"https://wa.me/8801723659531"}
          ></SecondaryButton>
        </div>
      </Container>
    </div>
  );
};

export default Hiring;
