import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const zoom = 10;
  const start = {
    lat: 55.676098,
    lng: 12.568337
  };
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
      //   {...other props}
      language="english"
    >
      <GoogleMap
        id="tradewind-map"
        //   {...other props }
      >
        {/* ...Your map components */}
      </GoogleMap>
    </LoadScript>
  );
};

const GoogleForecasts = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default GoogleForecasts;
