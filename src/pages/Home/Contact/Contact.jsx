import React, { useRef, useState } from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import { Container, Alert } from "react-bootstrap";
import SectionTitle from "../../../components/SecionTitle/SecionTitle";
import SocialList from "../../../components/SocialList/SocialList";
import { FiSend } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i421tgv",
        "template_7086ywv",
        formRef.current,
        "xz2JdTLj5EXDXLtwU"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

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

        <div className="contact-form">
          {status === "success" && (
            <Alert variant="success">
              {" "}
              <FaCheckCircle />
              Thanks for your message. We'll respond as soon as possible
            </Alert>
          )}
          {status === "error" && (
            <Alert variant="danger">
              Something went wrong. Please try again.
            </Alert>
          )}

          <Form ref={formRef} onSubmit={sendEmail}>
            <div className="name-email">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Type Your Message Here"
                required
              />
            </Form.Group>
            <button type="submit" className="btn-submit">
              Send Message
              <FiSend />
            </button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
