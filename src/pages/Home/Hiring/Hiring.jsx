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
            link={"https://www.upwork.com/freelancers/~017ca7c4e0396a0d07"}
          ></SecondaryButton>
        </div>
      </Container>
    </div>
  );
};

export default Hiring;
