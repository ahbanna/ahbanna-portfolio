import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="testimonial-area">
      <Container>
        <SectionTitle
          text="Client Testimonials"
          title="What People are Saying"
          des="Discover what clients have to say about working with me. Read their testimonials below to get a glimpse of the quality and satisfaction I deliver"
        ></SectionTitle>
        <div className="all-testimonials">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 1,
            }}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Grid, Autoplay, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <div className="single-testimonial">
                  <div className="client-img">
                    <img src={testimonial.image} alt="" srcset="" />
                    <FaQuoteRight></FaQuoteRight>
                  </div>
                  <p>{testimonial.feedback}</p>
                  <p className="customer-name">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
