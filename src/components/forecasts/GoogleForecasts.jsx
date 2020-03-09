import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const mapStyles = {
  width: "90vw",
  height: "90vh"
};

const getKey = () => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test")
    return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  else if (process.env.NODE_ENV === "production")
    return "AIzaSyBr6ZNvfbeAgitXdDqV7qF5Q66IydKg1v8";
};

const key = getKey();

const startCenter = {
  lat: 55.676098,
  lng: 12.568337
};

const startZoom = 10;

function Map() {
  return (
    <>
      <GoogleMap defaultZoom={startZoom} defaultCenter={startCenter} />
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function myMap() {
  return (
    <>
      <div style={mapStyles}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
          loadingElement={<div style={mapStyles}></div>}
          containerElement={<div style={mapStyles}></div>}
          mapElement={<div style={mapStyles}></div>}
        ></WrappedMap>
      </div>
    </>
  );
}
