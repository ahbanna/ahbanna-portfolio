import React, { useEffect, useState } from "react";
import "./Service.css";
import {
  AiOutlineGlobal,
  AiOutlineShoppingCart,
  AiOutlineCode,
  AiOutlineApi,
  AiOutlineLayout,
  AiOutlineTool,
} from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "AiOutlineGlobal":
        return <AiOutlineGlobal size={32} />;
      case "AiOutlineShoppingCart":
        return <AiOutlineShoppingCart size={32} />;
      case "AiOutlineCode":
        return <AiOutlineCode size={32} />;
      case "AiOutlineApi":
        return <AiOutlineApi size={32} />;
      case "AiOutlineLayout":
        return <AiOutlineLayout size={32} />;
      case "AiOutlineTool":
        return <AiOutlineTool size={32} />;
      default:
        return null;
    }
  };

  return (
    <div className="service-area">
      <div className="container">
        <div className="section-title">
          <h2>My Services</h2>
        </div>
        <div className="all-services">
          {services.map((service) => (
            <div className="single-service" key={service.id}>
              {getIconComponent(service.icon)}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="right-arrow">
                <BsArrowRightCircle></BsArrowRightCircle>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
