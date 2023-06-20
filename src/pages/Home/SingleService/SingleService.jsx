import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import serviceImg from "../../../assets/services/service-banner-img.jpg";
import serviceImg2 from "../../../assets/services/service-banner-img2.jpg";
import "./SingleService.css";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

const SingleService = () => {
  // const service = useLoaderData();
  // const { title, description } = service;

  const location = useLocation();
  const { title, description, details } = location.state || {};

  return (
    <div className="single-service-page">
      <div>
        <img src={serviceImg2} alt="" />
        <h2 className="ss-page-title">{title}</h2>
      </div>
      <div className="container">
        <div className="section-title">
          <h2>Services Details</h2>
        </div>
        <div>
          <p>{details}</p>
          {/* TODO: line break have to apply and other service details should be added */}
        </div>
        {/* TODO: let's talk have to apply */}
      </div>
    </div>
  );
};

export default SingleService;
