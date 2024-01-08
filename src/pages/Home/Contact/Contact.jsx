import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-left">
              <div className="section-title">
                <p>Get in touch</p>
                <h2>Let's make your brand brilliant!</h2>
                <h5>
                  Don't wait until tomorrow. Contact now and learn how to start
                  leveraging your business.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type Your Message Here "
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
