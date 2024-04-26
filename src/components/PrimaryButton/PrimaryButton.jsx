import React from "react";
import "./PrimaryButton.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, link }) => {
  return (
    <div className="primary-btn">
      <button>
        <Link to={link} target="_blank" className="btn-hover-mask">
          {text}
        </Link>
      </button>
    </div>
  );
};

export default PrimaryButton;
