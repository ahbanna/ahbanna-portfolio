import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import scrollTop from "../../../src/assets/top.png";
import Lottie from "lottie-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const topOffset = window.pageYOffset || document.documentElement.scrollTop;

    setIsVisible(topOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scrollIcon">
      {isVisible && <img src={scrollTop} alt="" onClick={scrollToTop} />}
    </div>
  );
};

export default ScrollToTop;
