import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
