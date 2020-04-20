import React from "react";
import {
  Container,
  // Row,
  // Col,
  Card,
  Button,
  ListGroup,
  // ListGroupItem,
  Accordion,
  // ToggleButtonGroup
} from "react-bootstrap";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import electricity2015 from "./biddingzones/2015electricity";

const menuCard = (setFeature, feature, zone, lat, lng) => {
  return () => {
    const handleChange = (val) => setFeature(val);
    // This is the top Feature of the card.
    const TextFeature = () => {
      if (feature === "zones") {
        const Electricity2015button = (props) => {
          if (Object.keys(electricity2015).includes(zone)) {
            return (
              <>
                <br />
                <Button variant="info">2015 Electricity for {zone}</Button>
              </>
            );
          } else if (zone) {
            return (
              <>
                <br /> Zone Selected: {zone}
              </>
            );
          } else {
            return null;
          }
        };
        return (
          <>
            <div className="text-center">
              <h5>Zones</h5>Select a Zone to see more information.
              <Electricity2015button />
              <br />
            </div>
          </>
        );
      } else if (feature === "point") {
        return (
          <>
            <div className="text-center">
              <h5>Point</h5>
              Marker is currently placed at:
              <br />
              lat: {lat}
              <br />
              lng: {lng}
            </div>
          </>
        );
      } else {
        return null;
      }
    };
    return (
      <Container id="Card">
        <Card>
          <Button variant="light" onClick={() => handleChange("point")}>
            Point Feature
          </Button>
          <Button variant="light" onClick={() => handleChange("zones")}>
            Bidding Zones
          </Button>
          <br />
          <TextFeature />
          <br />

          <Credits />
        </Card>
      </Container>
    );
  };
};

const Credits = () => {
  return (
    <Accordion>
      <Card className="text-center">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={"Credits"}>
            Credits
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={"Credits"}>
          <Card.Body>
            <ListGroup variant="flush">
              EN: © EuroGeographics for the administrative boundaries
              <br />
              FR: © EuroGeographics pour les limites administratives
              <br />
              DE: © EuroGeographics bezüglich der Verwaltungsgrenzen
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default menuCard;
