import React from "react";
import { Container, Card } from "react-bootstrap";
import LinkButton from "../util/LinkButton.jsx";
import windTurbine from "./img/cover.png";

const HomePage = () => {
  return (
    <>
      <h1 style={{ marginLeft: "50px" }}>
        Satellite Energy Solutions supplies precise projections and data for
        your renewable business case
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Card className="bg-dark text-white">
          <Card.Img src={windTurbine} alt="Card image" />
          <Card.ImgOverlay style={{ marginTop: "130px" }}>
            <Card.Title>
              <h3>
                <b>
                  Get better data and projections for your renewable business
                  case needs.
                </b>
              </h3>
            </Card.Title>
            <Card.Text>
              <b>
                Satellite Energy solutions provides precise electricity price,
                and wind turbine productions forecasts as well as high
                resolution data from 1985-2050.
              </b>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <br></br>
      <br></br>
      <Container>
        <h1>Discover our services</h1>
        <div style={{ width: "700px" }}>
          <h6>
            Our company use satellite data supplied by the European Space Agency
            and we use state of the art energy system models to supply you with
            high quality data and projections.
          </h6>
        </div>
      </Container>
      <LinkButton variant="primary" to="/info/problem">
        Learn more
      </LinkButton>
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
