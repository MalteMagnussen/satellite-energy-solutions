import React, { useState, useEffect } from "react";
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
  Modal,
} from "react-bootstrap";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import electricity2015 from "./biddingzones/2015electricity";
import { Line } from "react-chartjs-2";

/*
 * TODO MAKE MAP ZOOM AND PAN
 */
const menuCard = (setFeature, feature, zone, lat, lng) => {
  return () => {
    const handleChange = (val) => setFeature(val);
    // This is the top Feature of the card.
    const TextFeature = () => {
      // ZONE FEATURE START
      if (feature === "zones") {
        const Electricity2015button = (props) => {
          const [show, setShow] = useState(false);
          const [chartData, setChartData] = useState({});
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          const chart = () => {
            let data = [];
            if (zone && countries2015electricity.includes(zone)) {
              data = electricity2015[zone].map((integer) => Number(integer));
            }
            setChartData({
              labels: data,
              datasets: [
                {
                  label: zone,
                  data,
                  backgroundColor: ["rgba(75, 192, 192, 0.6"],
                  borderWidth: 4,
                  pointRadius: 0,
                },
              ],
            });
          };
          useEffect(() => {
            chart();
          }, []);
          if (countries2015electricity.includes(zone)) {
            return (
              <>
                <br />
                <Button variant="info" onClick={handleShow}>
                  2015 Electricity for {zone}
                </Button>
                <Modal centered show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Electricity prize per hour for 2015 for {zone}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Line
                      data={chartData}
                      options={{
                        responsive: true,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                autoSkip: true,
                                maxTicksLimit: 0,
                              },
                              gridLines: {
                                display: false,
                              },
                            },
                          ],
                          xAxes: [
                            {
                              gridLines: { display: false },
                            },
                          ],
                        },
                      }}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
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
      } // POINT FEATURE START
      else if (feature === "point") {
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

const countries2015electricity = [
  "BE",
  "DE",
  "DK1",
  "DK2",
  "FI",
  "FR",
  "NL",
  "NO1",
  "NO2",
  "NO3",
  "NO4",
  "NO5",
  "PL",
  "SE1",
  "SE2",
  "SE3",
  "SE4",
  "UK",
];

export default menuCard;
