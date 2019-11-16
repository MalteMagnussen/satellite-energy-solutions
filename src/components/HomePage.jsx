import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const HomePage = () => {
  const learnMore = () => {
    // Do something when Learn More button is pressed.
  };

  return (
    <>
      <Jumbotron>
        <h1>Satellite Energy Solutions</h1>
        <p>Energy Price Forecasting.</p>
        <p>
          <Button variant="primary" onClick={learnMore}>
            Learn more
          </Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default HomePage;
