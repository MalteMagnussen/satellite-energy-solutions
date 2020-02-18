import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Collaborators = () => {
  return (
    <>
      <Container>
        <h1>Our Collaborators</h1>
        <br />
        <h3>Accelerators we're a part of:</h3>
        <Row>
          <Col>
            1 of 2
            <br />
            <CopernicusText />
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

const CopernicusText = () => {
  return (
    <p>
      A total of €65bn was invested in 2018 on Europe level by the wind energy
      sector alone. To accurately facilitate auctions and examine business cases
      for the more than 420 wind turbines build that year, large amounts of data
      and analysis is needed. Using the Copernicus data set we aim to provide
      better forecasts of what production and electricity prices investors and
      other actors can expect. We will also provide a user-friendly platform to
      access and retrieve the data the customer needs in a user-friendly format,
      along with visualized data sets such as screening maps for wind speed or
      production.
    </p>
  );
};

export default Collaborators;
