import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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

  return (
    <>
      <Container>
        <h4>{positionText}</h4>
        <Map onClick={handleClick} {...mapOptions}>
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
      </Container>
    </>
  );
};

export default Forecasts;
