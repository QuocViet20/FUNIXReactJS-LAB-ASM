import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

function Contact(props) {
  const initialContact = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  };
  const initialErrors = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  };

  const [contact, setContact] = useState(initialContact);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleBlur = (e) => {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };

    const reg = /^\d+$/;
    if (contact.firstname && contact.firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters";
    if (contact.firstname && contact.firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters";
    if (contact.lastname && contact.lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters";
    if (contact.lastname && contact.lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters";
    if (contact.telnum && !reg.test(contact.telnum))
      errors.telnum = "Tel. Number should contain only numbers";
    if (
      contact.email &&
      contact.email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    setErrors(errors);
  };

  // const validate = () => {
  //   const reg = /^\d+$/;
  //   if (contact.firstname && contact.firstname.length < 3)
  //     validateErrors.firstname = "First Name should be >= 3 characters";
  //   if (contact.firstname && contact.firstname.length > 10)
  //     validateErrors.firstname = "First Name should be <= 10 characters";
  //   if (contact.lastname && contact.lastname.length < 3)
  //     validateErrors.lastname = "Last Name should be >= 3 characters";
  //   if (contact.lastname && contact.lastname.length > 10)
  //     validateErrors.lastname = "Last Name should be <= 10 characters";
  //   if (contact.telnum && !reg.test(contact.telnum))
  //     validateErrors.telnum = "Tel. Number should contain only numbers";
  //   if (
  //     contact.email &&
  //     contact.email.split("").filter((x) => x === "@").length !== 1
  //   )
  //     validateErrors.email = "Email should contain a @";

  //   return setErrors(validateErrors);
  // };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  valid={errors.firstname === ""}
                  invalid={errors.firstname !== ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={contact.firstname}
                />
                <FormFeedback>{errors.firstname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  valid={errors.lastname === ""}
                  invalid={errors.lastname !== ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={contact.lastname}
                />
                <FormFeedback>{errors.lastname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  name="telnum"
                  placeholder="Tel. number"
                  valid={errors.telnum === ""}
                  invalid={errors.telnum !== ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={contact.telnum}
                />
                <FormFeedback>{errors.telnum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={contact.email}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      onChange={handleChange}
                      checked={contact.agree}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  onChange={handleChange}
                  value={contact.contactType}
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  name="message"
                  rows="12"
                  onChange={handleChange}
                  value={contact.message}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
