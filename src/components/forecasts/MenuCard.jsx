import React from "react";
import {
  // Container,
  // Row,
  // Col,
  Card,
  Button,
  ListGroup,
  // ListGroupItem,
  Accordion,
  // ToggleButtonGroup
  Tab,
  Tabs,
} from "react-bootstrap";
import "./forecast.css";
import "leaflet/dist/leaflet.css";

import ChartFor2015Electricity from "./Chart2015Electricity";

/*
 * TODO MAKE MAP ZOOM AND PAN
 */
const MenuOptions = ({ setFeature, feature, zone, lat, lng }) => {
  // This is the top Feature of the card.
  const BiddingZoneFeature = () => {
    return (
      <>
        <div className="text-center" style={styles.myPadding}>
          <br />
          <h5>Zones</h5>Select a Zone to see more information.
          <ChartFor2015Electricity zone={zone} />
          <br />
        </div>
      </>
    );
  };

  return (
    <>
      <Tabs
        style={styles.tabs}
        id="controlled-tab-example"
        activeKey={feature}
        onSelect={(k) => setFeature(k)}
      >
        <Tab eventKey="point" title="Point">
          <div style={styles.myPadding} className="text-center">
            <br />
            <h5>Point</h5>
            Marker is currently placed at:
            <br />
            lat: {lat}
            <br />
            lng: {lng}
          </div>
        </Tab>
        <Tab eventKey="zones" title="Bidding Zones">
          <BiddingZoneFeature />
        </Tab>
      </Tabs>
      <br />
      <br />
      <Credits />
    </>
  );
};

const styles = {
  tabs: { paddingTop: 10 },
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  myPadding: {
    paddingLeft: 15,
    paddingRight: 15,
  },
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

export default MenuOptions;
