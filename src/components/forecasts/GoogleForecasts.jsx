import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "100%"
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

const startZoom = 14;

const options = {
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER // ,
    // ...otherOptions
  }
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key // ,
    // ...otherOptions
  });

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    const onLoad = React.useCallback(function onLoad(mapInstance) {
      // do something with map Instance
    });
    return (
      <GoogleMap options={options} onLoad={onLoad}>
        {
          // ...Your map components
        }
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <Spinner />;
};

export default Map;
