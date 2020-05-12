import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import MenuOptions from "./MenuCard";
import MapFeatures from "./MapFeatures";
import useWindowDimensions from "../util/WindowDimensions";
import { Container, Row, Col } from "react-bootstrap";
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

  const { height, width } = useWindowDimensions();
  const leafletHeight = height - 56;

  return (
    <>
      <Container fluid>
        <Row>
          <Col style={styles.col1} sm="auto">
            <MenuOptions
              setFeature={setFeature}
              feature={feature}
              zone={zone}
              lat={lat}
              lng={lng}
            />
          </Col>
          <Col style={styles.col2}>
            <Map
              style={{ height: `${leafletHeight}px`, width: `100%` }}
              id="MyMap"
              onClick={handleClick}
              {...mapOptions}
            >
              {Credits} {/* Always need credits */}
              <MapFeatures
                zone={zone}
                setZone={setZone}
                feature={feature}
                lat={lat}
                lng={lng}
              />
            </Map>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col1: {
    paddingLeft: 0,
    paddingRight: 0,
    width: "30%",
  },
  col2: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  myPadding: {
    paddingLeft: 15,
    paddingRight: 15,
  },
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
