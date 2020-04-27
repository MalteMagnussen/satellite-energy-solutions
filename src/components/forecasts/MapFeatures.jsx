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
  const EuropeFeature = () => {
    const Areas = ({ areas }) => {
      return areas.map((area) => <Area area={area} />);
    };
    const Area = ({ area }) => {
      return area.features.map((feature) => <Feature feature={feature} />);
    };
    const Feature = ({ feature }) => {
      const onHoverStyle = {
        fillOpacity: 0.4,
      };
      const onClickStyle = {
        fillOpacity: 0.8,
      };
      const defaultStyle = () => {
        return { fillOpacity: 0.2 };
      };
      return (
        <GeoJSON
          key={feature.id}
          onClick={() => setZone(feature.id)}
          data={feature}
        />
      );
    };

    const areas = [Norway, Sjaelland, Jylland, Sverige, Europe];
    return <Areas areas={areas} />;
  };

  if (feature === "zones") {
    return <EuropeFeature />;
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
