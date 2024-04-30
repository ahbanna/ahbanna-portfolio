import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import RecentProjects from "../RecentProjects/RecentProjects";
import About from "../../About/About";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Hiring from "../Hiring/Hiring";
import CustomCursor from "../../../components/CustomCursor/CustomCursor";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Skill></Skill>
      <RecentProjects></RecentProjects>
      <Testimonial></Testimonial>
      <Hiring></Hiring>
      <Contact></Contact>
      <CustomCursor></CustomCursor>
    </>
  );
};

export default Home;
