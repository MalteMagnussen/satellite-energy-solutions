import React from "react";
import { Container, Card } from "react-bootstrap";
import satelliteImg from "./Satellite.jpg";

const SatelliteDataPage = () => {
  return (
    <>
      <Container>
        <h1>Satellite data - for renewable </h1>
        <br />
        <br />
        <p style={{ textAlign: "justify" }}>
          Data is the start of any project on renewable energy projects. Using
          the Copernicus database supplied by the European Space Agency, we can
          provide hourly data from 1985 to present time on everything from wind
          speed, solar irradiation and temperature. Combining the data with long
          term weather projection models we also provide long term weather
          forecasts.
        </p>
      </Container>
      <br />
      <br />
      <Card className="bg-dark text-white">
        <Card.Img src={satelliteImg} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "50px", marginLeft: "30px" }}>
          <Card.Title>
            <h3>
              <b>
                Get access to high resolution<br></br> satellite data & more
              </b>
            </h3>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default SatelliteDataPage;
