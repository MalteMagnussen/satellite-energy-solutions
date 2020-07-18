import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import MenuOptions from "./MenuCard";
import MapFeatures from "./MapFeatures";
import GridContainer from "components/Grid/GridContainer.js";
import Grid from "@material-ui/core/Grid";
import { sizing, flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import GridItem from "components/Grid/GridItem.js";
import useWindowDimensions from "./windowdimensions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const L = require("leaflet");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Forecasts = () => {
  const classes = useStyles();
  const startLocation = [57.42630884997942, -1.7578125000000002];
  const [lat, setLat] = useState(startLocation[0]);
  const [lng, setLng] = useState(startLocation[1]);
  const [feature, setFeature] = useState("none");
  const [zone, setZone] = useState("DE");

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
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Map
            style={{ height: `${height}px`, width: `100%` }}
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
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuOptions
              setFeature={setFeature}
              feature={feature}
              zone={zone}
              lat={lat}
              lng={lng}
            />
          </Paper>
        </Grid>
      </Grid>
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
