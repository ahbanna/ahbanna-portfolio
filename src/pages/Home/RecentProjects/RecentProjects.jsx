import React, { useState, useEffect } from "react";
import "./RecentProjects.css";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImLink } from "react-icons/im";

const RecentProjects = () => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(6); // State for number of displayed items

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setOriginalItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterItem = (categItem, event) => {
    event.preventDefault();
    const updateItems = originalItems.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActiveCategory(categItem);
  };

  const resetFilter = (event) => {
    event.preventDefault();
    setItems(originalItems);
    setActiveCategory(null);
  };

  const handleLoadMore = () => {
    setDisplayedItems(items.length); // Display all items
  };

  return (
    <div className="recent-project-area" id="projects">
      <Container>
        <SectionTitle
          title="Some of My Creative Projects"
          text="My Recent Projects"
        ></SectionTitle>
      </Container>
      <Container>
        <ul className="nav justify-content-center" data-aos="flip-left">
          <li className="nav-item">
            <a
              className={!activeCategory ? "nav-link active" : "nav-link"}
              href="#"
              onClick={(event) => resetFilter(event)}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeCategory === "react" ? "nav-link active" : "nav-link"
              }
              href="#"
              onClick={(event) => filterItem("react", event)}
            >
              React JS{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeCategory === "html" ? "nav-link active" : "nav-link"
              }
              href="#"
              onClick={(event) => filterItem("html", event)}
            >
              HTML & CSS
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a
              className={
                activeCategory === "wordpress" ? "nav-link active" : "nav-link"
              }
              href="#"
              onClick={(event) => filterItem("wordpress", event)}
            >
              Wordpress
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeCategory === "shopify" ? "nav-link active" : "nav-link"
              }
              href="#"
              onClick={(event) => filterItem("shopify", event)}
            >
              Shopify
            </a>
          </li>
        </ul>
      </Container>
      <div className="all-items">
        {items.slice(0, displayedItems).map((elem) => {
          const { id, name, image, description, liveLink } = elem;
          return (
            <div key={id}>
              <div className="single-items" data-aos="zoom-out-up">
                <div className="single-portfolio">
                  <div className="portfolio-bg">
                    <img src={image} alt="" srcSet="" />
                  </div>
                  <div className="portfolio-view-details">
                    <Link to={liveLink} target="_blank">
                      <ImLink />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {items.length > 6 && displayedItems < items.length && (
        <div className="load-more-btn text-center">
          <button className="secondary-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
