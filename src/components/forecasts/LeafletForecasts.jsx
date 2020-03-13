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
import menuOptions from "./MenuOptions";
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
            {Object.entries(menuOptions).map(([key, values], index) => (
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
