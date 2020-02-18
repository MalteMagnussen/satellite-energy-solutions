import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CopernicusMissionPatch from "./presskit/MissionPatch19.png";

const Collaborators = () => {
  return (
    <>
      <Container>
        <h1>Our Collaborators</h1>
        <br />
        <h3>Accelerators we're a part of</h3>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Our first accelerator</Card.Header>
              <Card.Body>
                <Card.Title>Copernicus Accelerator</Card.Title>
                <Card.Text>
                  <CopernicusText />
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://accelerator.copernicus.eu/"
                  target="_blank"
                >
                  Visit their site
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Joined in fall 2019
              </Card.Footer>
              <Card.Img variant="bottom" src={CopernicusMissionPatch} />
            </Card>
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
