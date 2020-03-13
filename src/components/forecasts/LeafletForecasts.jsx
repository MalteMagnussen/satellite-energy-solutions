import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Accordion
} from "react-bootstrap";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
  Rectangle
} from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
const L = require("leaflet");

const Forecasts = () => {
  const startLocation = [56.25798302076854, 10.667724609375002];
  const [lat, setLat] = useState(startLocation[0]);
  const [lng, setLng] = useState(startLocation[1]);
  const handleClick = e => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);
  };
  const mapOptions = {
    center: [...startLocation],
    zoom: 7
  };

  useEffect(() => {
    // The following is magic, to allow Marker to work. From: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-541142178

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  const Credits = (
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  );

  const SatelliteImagery = (
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    />
  );

  const Data = {
    "Historical raw data": [
      "Day ahead prices (land/zone,Eur/mwh,dato)",
      "Generation levels",
      "Installed capacity",
      "Electricity demand",
      "Environmental impact levels"
    ],
    "Long term forecasts": [
      "Day ahead prices",
      "Generation levels",
      "Installed capacity",
      "Electricity demand",
      "Environmetal impact levels"
    ],
    "Wind related": [
      "Wind capture prices",
      "Wind capture price correlated to wind speeds",
      "Turbine data"
    ]
  };

  return (
    <>
      <Container id="Card">
        <Card className="text-center">
          <h5>Point</h5>
          Marker is currently placed at:
          <br />
          lat: {lat}
          <br />
          lng: {lng}
          <br />
          <Accordion>
            {Object.entries(Data).map(([key, values], index) => (
              <>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index.toString()}
                    >
                      {key}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {values.map(value => (
                          <ListGroup.Item>{value}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </>
            ))}
          </Accordion>
        </Card>
      </Container>
      <Map id="MyMap" onClick={handleClick} {...mapOptions}>
        {Credits}
        {SatelliteImagery}
        <Marker position={[lat, lng]}>
          <Popup>
            Get Data about your Feasibility Study
            <br />
            This marker is placed at
            <br />
            Lat: {lat}
            <br />
            Long: {lng}
          </Popup>
        </Marker>
      </Map>
    </>
  );
};

export default Forecasts;

// const colRows = (
// {/* <Container fluid> */}
//       {/* <Row
//           className="justify-content-md-center"
//           xs={2}
//           sm={4}
//           md={6}
//           lg={8}
//           xl={10}
//         >
//           <Col xs={2} md={2} lg={2} xl={2}>
//             Put Drop downs here
//             <h4>{positionText}</h4>
//           </Col>
//           <Col xs={2} md={2} lg={6} xl={8}> */}
//       {/* </Col>
//         </Row>
//       </Container> */}
// )
/**
 * Screen Sizes:
 * xs = extra small
 * sm = small
 * md = medium
 * lg = large
 * xl = extra large
 */

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
