import React from "react";
import {
  Marker,
  Popup,
  // FeatureGroup,
  // Circle,
  // Rectangle
  GeoJSON,
} from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import Sjaelland from "./biddingzones/sjaelland";
import Jylland from "./biddingzones/jylland";
import Sverige from "./biddingzones/sverige";
import Norway from "./biddingzones/norway";
import Europe from "./biddingzones/europe";

const MapFeatures = ({ setZone, feature, lat, lng }) => {
  const areas = [Norway, Sjaelland, Jylland];
  const EuropeFeature = (
    <>
      {Europe.features.map((area) => (
        <React.Fragment key={area.id}>
          <GeoJSON onClick={() => setZone(area.id)} data={area} />
        </React.Fragment>
      ))}
    </>
  );
  const SverigeFeature = (
    <>
      {Sverige.map((area, index) => (
        <React.Fragment key={index}>
          <GeoJSON onClick={() => setZone(area.properties.name)} data={area} />
        </React.Fragment>
      ))}
    </>
  );
  if (feature === "zones") {
    return (
      <>
        {areas.map((area, index) => (
          <GeoJSON
            key={index}
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

export default MapFeatures;
