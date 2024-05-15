import React from "react";
import sun from "../../assets/Sun.svg";
import moon from "../../assets/Moon.svg";
import "./ToggleMode.css";

const ToggleMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <img src={moon} alt="" srcset="" />
        <img src={sun} alt="" srcset="" />
      </label>
    </div>
  );
};

export default ToggleMode;
