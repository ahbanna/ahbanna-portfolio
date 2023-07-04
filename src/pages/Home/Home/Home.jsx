import React from "react";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import RecentProjects from "../RecentProjects/RecentProjects";
import AboutMe from "../../AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Service></Service>
      <Skill></Skill>
      <RecentProjects></RecentProjects>
    </div>
  );
};

export default Home;
