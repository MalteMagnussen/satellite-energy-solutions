import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";

const Forecasts = () => {
  const startLocation = [56.25798302076854, 10.667724609375002];
  const [lat, setLat] = useState(startLocation[0]);
  const [lng, setLng] = useState(startLocation[1]);
  const [positionText, setPositionText] = useState("Click map to show lat-lng");
  const handleClick = e => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);
    setPositionText(`You clicked:
    Lat: ${e.latlng.lat}
    Lng: ${e.latlng.lng}`);
  };
  const mapOptions = {
    center: [...startLocation],
    zoom: 7
  };

  useEffect(() => {
    // The following is magic, to allow Marker to work. From: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-541142178
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

  /**
   * Screen Sizes:
   * xs = extra small
   * sm = small
   * md = medium
   * lg = large
   * xl = extra large
   */

  return (
    <>
      <Container fluid>
        <Row
          className="justify-content-md-center"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={10}
        >
          <Col xs={2} md={2} lg={2} xl={2}>
            Put Drop downs here
            <h4>{positionText}</h4>
          </Col>
          <Col xs={2} md={2} lg={6} xl={8}>
            <Map
              onClick={handleClick}
              {...mapOptions}
              style={{ height: "80vh" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Forecasts;
