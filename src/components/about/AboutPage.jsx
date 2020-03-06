import React from "react";
import {  Row, Col, Card } from "react-bootstrap";
import FooterImage from "./img/about.jpg";
import LinkButton from "../util/LinkButton.jsx";

const About = () => {
  return (
    <>
      <br></br>
      <Row>
        <Col md={1}>
          <h1 style={{ marginLeft: "50px" }}>About</h1>
        </Col>
        <Col
          md={{ span: 5, offset: 5 }}
          style={{ textAlign: "justify", marginRight: "80px" }}
        >
          We are a newly started startup with big plans. Coming from the
          renewable energy industry, the founding partners have seen that the
          common practice of calculating business cases for renewable energy
          projects could be improved. This online platform will provide a user
          friendly way of accessing high resolution forecasting of prices and
          production and retrieving raw data in one transparent platform.
          Everything in a user friendly manner, available and useable for
          Engineer and Economist alike.{" "}
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

const Footer = () => {
  const topSpace = {
    marginTop: "50px"
  };
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={FooterImage} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "30px", marginLeft: "30px" }}>
          <Card.Title>
            <h3>
              <b>Want to get involved?</b>
            </h3>
          </Card.Title>
          <Card.Text>
            <LinkButton variant="light" to="/team" style={topSpace}>
              <h4>Contact</h4>
            </LinkButton>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default About;
