import React from "react";
import "./forecast.css";
import "leaflet/dist/leaflet.css";

import ChartFor2015Electricity from "./Chart2015Electricity";

import Accordion from "./Accordion";
import List from "./List";

const MenuOptions = ({ setFeature, feature, zone, lat, lng }) => {
  const BiddingZoneFeature = () => {
    return (
      <div className="text-center">
        <br />
        <h5>Zones</h5>Select a Zone to see more information.
        <ChartFor2015Electricity zone={zone} />
        <br />
        <h3>Coming Soon</h3>
        <List
          items={[
            "Electrical load",
            "Electricity production",
            "Flexibility prices",
            "CO2 emissions",
            "Transmission capacity",
            "Installed capacity",
            "Capture prices",
            "Outages",
            "Capacity factors",
            "Hydro resevoir levels",
          ]}
        />
      </div>
    );
  };

  const MapAnalytics = () => {
    return (
      <div className="text-center">
        <h3>Coming Soon</h3>
        <List
          items={[
            "CO2 impact",
            "Total production",
            "Yearly revenue",
            "Value of wind",
            "Transmission Capacity",
            "Capture prices",
            "Outages",
            "Capacity factors",
            "Hydro reservoir levels",
          ]}
        />
      </div>
    );
  };

  return (
    <>
      <Accordion disabled={true} title={"Graph builder"} />
      <Accordion disabled={true} title={"Short term forecasts"} />
      <Accordion disabled={true} title={"Long term forecasts"} />
      <Accordion
        title={"Historical Data"}
        onChange={(event, expanded) =>
          expanded === true ? setFeature("zones") : setFeature("none")
        }
      >
        <BiddingZoneFeature />
      </Accordion>
      <Accordion title={"Map analytics"}>
        <MapAnalytics />
      </Accordion>
      <Accordion disabled={true} title={"Case study"} />
      <Accordion title={"Credits"}>
        <small>
          EN: © EuroGeographics for the administrative boundaries
          <br />
          FR: © EuroGeographics pour les limites administratives
          <br />
          DE: © EuroGeographics bezüglich der Verwaltungsgrenzen
        </small>
      </Accordion>
    </>
  );
};

export default MenuOptions;
