import React from "react";
import "./forecast.css";
import "leaflet/dist/leaflet.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ChartFor2015Electricity from "./Chart2015Electricity";

/*
 * TODO MAKE MAP ZOOM AND PAN
 */
const MenuOptions = ({ setFeature, feature, zone, lat, lng }) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // This is the top Feature of the card.
  const BiddingZoneFeature = () => {
    return (
      <>
        <div className="text-center">
          <br />
          <h5>Zones</h5>Select a Zone to see more information.
          <ChartFor2015Electricity zone={zone} />
          <br />
        </div>
      </>
    );
  };

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
        >
          <Tab label="Point" onClick={() => setFeature("point")} />
          <Tab label="Bidding Zones" onClick={() => setFeature("zones")} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <div className="text-center">
          <br />
          <h5>Point</h5>
          Marker is currently placed at:
          <br />
          lat: {lat}
          <br />
          lng: {lng}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BiddingZoneFeature />
      </TabPanel>

      <br />
      <br />
      <Credits />
    </>
  );
};

const Credits = () => {
  return (
    <>
      <small>
        EN: © EuroGeographics for the administrative boundaries
        <br />
        FR: © EuroGeographics pour les limites administratives
        <br />
        DE: © EuroGeographics bezüglich der Verwaltungsgrenzen
      </small>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default MenuOptions;
