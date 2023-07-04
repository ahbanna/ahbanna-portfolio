import React, { useState } from "react";
import "./RecentProjects.css";
import { Button, Modal } from "react-bootstrap";
import social_chef from "../../../assets/projects/social_chef.png";
import social_chef_banner from "../../../assets/projects/social_chef_banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import social_chef1 from "../../../assets/projects/social_chef1.png";
import social_chef2 from "../../../assets/projects/social_chef2.png";
import social_chef3 from "../../../assets/projects/social_chef3.png";
import edu_kids_banner from "../../../assets/projects/edukids/edu-kids-banner.png";
import sports_camp_banner from "../../../assets/projects/sports-camp/sports-camp-banner.png";
import job_hunter_banner from "../../../assets/projects/job-hunter/job-hunter-banner.png";
import { FaLine } from "react-icons/fa";
const RecentProjects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="recent-projects-area" id="recent-projects">
      <div className="container">
        <div className="section-title">
          <p>Passion Projects</p>
          <h2>My Recent Projects</h2>
          {/* <div className="section-underline"></div> */}
        </div>
        <div className="all-recent-projects">
          <div className="single-recent-project">
            <div className="image-container">
              <img src={sports_camp_banner} alt="" />
              <p className="open-modal-text" onClick={handleShow}>
                Visit The Website
              </p>
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Social Chef</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="link-area">
                  <button>
                    <a
                      href="https://chef-hunter-d7d7c.web.app/"
                      target="_blank"
                    >
                      Live site <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-client"
                      target="_blank"
                    >
                      Client site code <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-server"
                      target="_blank"
                    >
                      Server site code <FaLine></FaLine>
                    </a>
                  </button>
                </div>
                <Carousel>
                  <div>
                    <img src={social_chef_banner} />
                  </div>
                  <div>
                    <img src={social_chef1} />
                  </div>
                  <div>
                    <img src={social_chef2} />
                  </div>
                  <div>
                    <img src={social_chef3} />
                  </div>
                </Carousel>
              </Modal.Body>
            </Modal>
          </div>
          <div className="single-recent-project">
            <div className="image-container">
              <img src={edu_kids_banner} alt="" />
              <p className="open-modal-text" onClick={handleShow}>
                Visit The Website
              </p>
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Social Chef</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="link-area">
                  <button>
                    <a
                      href="https://chef-hunter-d7d7c.web.app/"
                      target="_blank"
                    >
                      Live site <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-client"
                      target="_blank"
                    >
                      Client site code <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-server"
                      target="_blank"
                    >
                      Server site code <FaLine></FaLine>
                    </a>
                  </button>
                </div>
                <Carousel>
                  <div>
                    <img src={social_chef_banner} />
                  </div>
                  <div>
                    <img src={social_chef1} />
                  </div>
                  <div>
                    <img src={social_chef2} />
                  </div>
                  <div>
                    <img src={social_chef3} />
                  </div>
                </Carousel>
              </Modal.Body>
            </Modal>
          </div>
          <div className="single-recent-project">
            <div className="image-container">
              <img src={social_chef_banner} alt="" />
              <p className="open-modal-text" onClick={handleShow}>
                Visit The Website
              </p>
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Social Chef</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="link-area">
                  <button>
                    <a
                      href="https://chef-hunter-d7d7c.web.app/"
                      target="_blank"
                    >
                      Live site <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-client"
                      target="_blank"
                    >
                      Client site code <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-server"
                      target="_blank"
                    >
                      Server site code <FaLine></FaLine>
                    </a>
                  </button>
                </div>
                <Carousel>
                  <div>
                    <img src={social_chef_banner} />
                  </div>
                  <div>
                    <img src={social_chef1} />
                  </div>
                  <div>
                    <img src={social_chef2} />
                  </div>
                  <div>
                    <img src={social_chef3} />
                  </div>
                </Carousel>
              </Modal.Body>
            </Modal>
          </div>
          <div className="single-recent-project">
            <div className="image-container">
              <img src={job_hunter_banner} alt="" />
              <p className="open-modal-text" onClick={handleShow}>
                Visit The Website
              </p>
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Social Chef</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="link-area">
                  <button>
                    <a
                      href="https://chef-hunter-d7d7c.web.app/"
                      target="_blank"
                    >
                      Live site <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-client"
                      target="_blank"
                    >
                      Client site code <FaLine></FaLine>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/ahbanna/chef-hunter-server"
                      target="_blank"
                    >
                      Server site code <FaLine></FaLine>
                    </a>
                  </button>
                </div>
                <Carousel>
                  <div>
                    <img src={social_chef_banner} />
                  </div>
                  <div>
                    <img src={social_chef1} />
                  </div>
                  <div>
                    <img src={social_chef2} />
                  </div>
                  <div>
                    <img src={social_chef3} />
                  </div>
                </Carousel>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
