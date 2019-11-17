import React from "react";
import { Jumbotron } from "react-bootstrap";
import LinkButton from "../util/LinkButton.jsx";

const HomePage = () => {
  return (
    <>
      <Jumbotron>
        <h1>Satellite Energy Solutions</h1>
        <JumboTronText />
        <LinkButton variant="primary" to="/info/problem">
          Learn more
        </LinkButton>
      </Jumbotron>
    </>
  );
};

const JumboTronText = () => {
  return (
    <p>
      A total of €65bn was invested in 2018 on Europe level by the wind energy
      sector alone. To accurately facilitate auctions and examine business cases
      for the more than 420 wind turbines build that year, large amounts of data
      and analysis is needed. Using the Copernicus data set we aim to provide
      better forecasts of what production and electricity prices investors and
      other actors can expect. We will also provide a user-friendly platform to
      access and retrieve the data the customer needs in a user-friendly format,
      along with visualized data sets such as screening maps for wind speed or
      production.
    </p>
  );
};

export default HomePage;
