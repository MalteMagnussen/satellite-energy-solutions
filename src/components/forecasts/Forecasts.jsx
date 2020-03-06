import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Map, TileLayer } from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Forecasts = () => {
  const [position, setPosition] = useState("Click map to show lat-lng");
  const handleClick = e => {
    setPosition(`You clicked:\nLat: ${e.latlng.lat}\nLng: ${e.latlng.lng}`);
  };

  return (
    <>
      <Container>
        <h3>[UNDER CONSTRUCTION]</h3>
        <h4>{position}</h4>
        <Map onClick={handleClick} center={[55.676098, 12.568337]} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </Container>
    </>
  );
};

export default Forecasts;
