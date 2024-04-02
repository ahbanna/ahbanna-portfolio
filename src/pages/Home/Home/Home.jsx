import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import RecentProjects from "../RecentProjects/RecentProjects";
import About from "../../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Skill></Skill>
      <RecentProjects></RecentProjects>
      <Contact></Contact>
    </>
  );
};

export default Home;
