import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CopernicusMissionPatch from "./presskit/MissionPatch19.png";
import ParsecLogo from "./presskit/fb-opengraph.png";

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
          <Col>
            <Card className="text-center">
              <Card.Header>Our second accelerator</Card.Header>
              <Card.Body>
                <Card.Title>Parsec Accelerator</Card.Title>
                <Card.Text>
                  <ParsecText />
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://parsec-accelerator.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit their site
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Joined in Winter 2020
              </Card.Footer>
              <Card.Img variant="bottom" src={ParsecLogo} />
            </Card>
          </Col>
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

const ParsecText = () => {
  return (
    <>
      <p>
        The holistic two-stage acceleration programme will distribute a total of
        €2.5 Million equity-free funding to 100 beneficiaries, alongside other
        key resources (coaching, matchmaking, promotion) needed to develop and
        launch 15 new products and services into the market. PARSEC will also
        provide a suite of{" "}
        <a
          href="https://parsec-accelerator.eu/business-catalysts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          business catalysts
        </a>{" "}
        for transforming data into market-ready services. The first Open Call
        for applications was held between 20 September 2019 and 3 January 2020.
        The second Open Call will be launched in spring 2020.
      </p>
    </>
  );
};

export default Collaborators;
