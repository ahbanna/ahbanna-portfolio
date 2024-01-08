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
import { Link } from "react-router-dom";

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
    <div className="service-area" id="services">
      <div className="container">
        <div className="section-title">
          <p>Featured Services</p>
          <h2>My Services</h2>
          {/* <div className="section-underline"></div> */}
        </div>
        <div className="all-services">
          {services.map((service) => (
            <div className="single-service" key={service.id}>
              {getIconComponent(service.icon)}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to={`/singleservice/${service.id}`}
                state={{
                  title: service.title,
                  description: service.description,
                  details: service.details,
                  serviceId: service.id,
                  image: service.image,
                }}
              >
                <span className="right-arrow">
                  <BsArrowRightCircle></BsArrowRightCircle>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
