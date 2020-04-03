import React, { useState, useEffect } from "react";
import {
  Container,
  // Row,
  // Col,
  Card,
  Button,
  ListGroup,
  // ListGroupItem,
  Accordion
  // ToggleButtonGroup
} from "react-bootstrap";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  // FeatureGroup,
  // Circle,
  // Rectangle
  GeoJSON
} from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import menuOptions from "./MenuOptions";
import Sjaelland from "./biddingzones/sjaelland";
import Jylland from "./biddingzones/jylland";
import Sverige from "./biddingzones/sverige";
import Norway from "./biddingzones/norway";
import Europe from "./biddingzones/europe";
const L = require("leaflet");

const Forecasts = () => {
  const startLocation = [56.25798302076854, 10.667724609375002];
  const [lat, setLat] = useState(startLocation[0]);
  const [lng, setLng] = useState(startLocation[1]);
  const [feature, setFeature] = useState("zones");
  const [zone, setZone] = useState();
  const handleClick = e => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);
  };
  const mapOptions = {
    center: [...startLocation],
    zoom: 6
  };
  const handleChange = val => setFeature(val);

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

  const MyMapFeatures = () => {
    const areas = [Norway, Sjaelland, Jylland];
    const EuropeFeature = (
      <>
        {Europe.map(area => (
          <React.Fragment key={area.id}>
            <GeoJSON
              onClick={() => setZone(area.properties.NAME_ENGL)}
              data={area}
            />
          </React.Fragment>
        ))}
      </>
    );
    const SverigeFeature = (
      <>
        {Sverige.map((area, index) => (
          <React.Fragment key={index}>
            <GeoJSON
              onClick={() => setZone(area.properties.name)}
              data={area}
            />
          </React.Fragment>
        ))}
      </>
    );

    if (feature === "zones") {
      return (
        <>
          {areas.map(area => (
            <GeoJSON
              onClick={() => setZone(area.properties.name)}
              data={area}
            />
          ))}
          {SverigeFeature}
          {EuropeFeature}
        </>
      );
    } else if (feature === "point") {
      return (
        <>
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
        </>
      );
    } else {
      return null;
    }
  };

  const TextFeature = () => {
    if (feature === "zones") {
      return (
        <>
          <div className="text-center">
            <h5>Zones</h5>Select a Zone to see more information. <br /> Zone
            Selected: {zone}
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
    <>
      <Container id="Card">
        <Card>
          <Button variant="light" onClick={() => handleChange("point")}>
            Point Feature
          </Button>
          <Button variant="light" onClick={() => handleChange("zones")}>
            Bidding Zone Feature
          </Button>
          <br />
          <TextFeature />
          <br />
          <br />

          <Accordion>
            {Object.entries(menuOptions).map(([key, values], index) => (
              <React.Fragment key={index}>
                <Card className="text-center">
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
                        {values.map((value, index) => (
                          <ListGroup.Item key={index}>{value}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </React.Fragment>
            ))}
          </Accordion>
        </Card>
      </Container>

      <Map id="MyMap" onClick={handleClick} {...mapOptions}>
        {Credits} {/* Always need credits */}
        {SatelliteImagery}
        <MyMapFeatures />
      </Map>
    </>
  );
};

export default Forecasts;
