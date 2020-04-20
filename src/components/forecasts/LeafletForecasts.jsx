import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import menuCard from "./MenuCard";
import MapFeatures from "./MapFeatures";
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
  const MenuOptions = menuCard(setFeature, feature, zone, lat, lng);

  // The Point and Bidding Zone features.
  const MyMapFeatures = MapFeatures(setZone, feature, lat, lng);

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
