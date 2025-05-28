import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import SocialList from "../../../components/SocialList/SocialList";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-area" id="contact">
      <Container>
        <div>
          <SectionTitle
            text="Get in touch"
            title="Let's make your brand brilliant!"
            des="Don't wait until tomorrow. Contact now and learn how to start leveraging your business."
          ></SectionTitle>
          <SocialList></SocialList>
        </div>
        <div
          className="contact-form"
          // data-aos="fade-up"
          // data-aos-anchor-placement="top-center"
        >
          <Form>
            <div className="name-email">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type Your Message Here "
              />
            </Form.Group>
            <div className="btn-submit">
              <SecondaryButton
                text={
                  <>
                    send message <FiSend />
                  </>
                }
              ></SecondaryButton>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
