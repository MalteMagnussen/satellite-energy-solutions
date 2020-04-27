import React, { useState } from "react";
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

const MapFeatures = ({ zone, setZone, feature, lat, lng }) => {
  const EuropeFeature = () => {
    const Areas = ({ areas }) => {
      return areas.map((area, index) => <Area key={index} area={area} />);
    };
    const Area = ({ area }) => {
      return area.features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ));
    };
    const Feature = ({ feature }) => {
      const [style, setStyle] = useState({
        fillOpacity: 0.2,
      });
      const onHoverStyle = {
        fillOpacity: 0.4,
      };
      const onClickStyle = {
        fillOpacity: 0.8,
      };
      const defaultStyle = {
        fillOpacity: 0.2,
      };
      return (
        <GeoJSON
          onClick={() => setZone(feature.id)}
          onmouseover={() => {
            setStyle(onHoverStyle);
          }}
          onmouseout={() => {
            setStyle(defaultStyle);
          }}
          data={feature}
          style={() => {
            return feature.id === zone ? onClickStyle : style;
          }}
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

/*
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    lineCap?: LineCapShape;
    lineJoin?: LineJoinShape;
    dashArray?: string | number[];
    dashOffset?: string;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    fillRule?: FillRule;
    renderer?: Renderer;
    className?: string;
*/
