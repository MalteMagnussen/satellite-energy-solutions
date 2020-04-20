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
} from "react-bootstrap";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  // FeatureGroup,
  // Circle,
  // Rectangle
  GeoJSON,
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
  const startLocation = [57.42630884997942, -1.7578125000000002];
  const [lat, setLat] = useState(startLocation[0]);
  const [lng, setLng] = useState(startLocation[1]);
  const [feature, setFeature] = useState("zones");
  const [zone, setZone] = useState();
  const handleClick = (e) => {
    setLat(e.latlng.lat);
    setLng(e.latlng.lng);
  };
  const mapOptions = {
    center: [...startLocation],
    zoom: 4,
  };

  // This useEffect runs once when page loads.
  useEffect(() => {
    // The following is magic, to allow Marker to work. From: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-541142178
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  // The Card at the left side of the Map "Forecasting" view.
  const MenuOptions = () => {
    const handleChange = (val) => setFeature(val);

    // This is the top Feature of the card.
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

          <Accordion>
            <Card className="text-center">
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={"Credits"}
                >
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
        </Card>
      </Container>
    );
  };

  // The Point and Bidding Zone features.
  const MyMapFeatures = () => {
    const areas = [Norway, Sjaelland, Jylland];
    const EuropeFeature = (
      <>
        {Europe.features.map((area) => (
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
          {areas.map((area) => (
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

  return (
    <>
      <MenuOptions />

      <Map id="MyMap" onClick={handleClick} {...mapOptions}>
        {Credits} {/* Always need credits */}
        <MyMapFeatures />
      </Map>
    </>
  );
};

const Credits = (
  <>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    />
  </>
);

export default Forecasts;
