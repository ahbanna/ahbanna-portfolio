import React, { useEffect, useState } from "react";
import "./Service.css";
import {
  AiOutlineGlobal,
  AiOutlineShoppingCart,
  AiOutlineCode,
  AiOutlineApi,
  AiOutlineLayout,
  AiOutlineTool,
  AiFillSecurityScan,
} from "react-icons/ai";
import { MdOutlineManageHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import { MdKeyboardArrowRight } from "react-icons/md";

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
      case "AiFillSecurityScan":
        return <AiFillSecurityScan size={32} />;
      case "MdOutlineManageHistory":
        return <MdOutlineManageHistory size={32} />;
      default:
        return null;
    }
  };

  return (
    <div className="service-area" id="services">
      <Container>
        <SectionTitle
          text="what i do for you"
          title="my services"
        ></SectionTitle>
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
                <div className="read-more-btn">
                  <p className="read-more-text">Read More </p>
                  <MdKeyboardArrowRight />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Service;
