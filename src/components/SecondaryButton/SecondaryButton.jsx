import React from "react";
import "./SecondaryButton.css";
import { Link } from "react-router-dom";

const SecondaryButton = ({ text, link }) => {
  return (
    <div>
      <button className="secondary-btn">
        <Link to={link} target="_blank">
          {text}
        </Link>
      </button>
    </div>
  );
};

export default SecondaryButton;
