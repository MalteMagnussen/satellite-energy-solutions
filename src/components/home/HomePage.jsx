import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import LinkButton from "../util/LinkButton.jsx";
import windTurbine from "./img/cover.png";
import satellite from "./img/satellite.jpg";
import power from "./img/power.jpg";
import windTurbineBelow from "./img/windTurbineBelow.jpg";
import screeningMap from "./img/ScreeningMap.png";

const cardImageStyle = {
  height: "400px"
};

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
      <WindTurbineCard />
      <br></br>
      <br></br>
      <DiscoverOurServices />
      <br></br>
      <MyFrontPageCardDeck />
      <br></br>
      <Footer />
    </>
  );
};

const Footer = () => {
  const topSpace = {
    marginTop: "50px"
  };
  return (
    <>
      <Card bg="dark" text="white">
        <Card.Header>
          <h1 style={topSpace}>Want to know more, or get involved?</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title style={topSpace}>
            We are still new and eager to get feedback and new collaborations.
            <br></br>
            If your interest is peaked, do not hesitate to take contact.
          </Card.Title>
          {/* TODO UPDATE LINK HERE WHEN CONTACT PAGE IS DONE */}
          <LinkButton variant="light" to="/info/problem" style={topSpace}>
            <h4>Contact</h4>
          </LinkButton>
        </Card.Body>
      </Card>
    </>
  );
};

const WindTurbineCard = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={windTurbine} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "130px", marginLeft: "30px" }}>
          <Card.Title>
            <h3>
              <b>
                Get better data and projections for your renewable business case
                needs.
              </b>
            </h3>
          </Card.Title>
          <Card.Text>
            <b>
              Satellite Energy solutions provides precise electricity price, and
              wind turbine productions forecasts as well as high resolution data
              from 1985-2050.
            </b>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

const DiscoverOurServices = () => {
  return (
    <>
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
    </>
  );
};

const MyFrontPageCardDeck = () => {
  return (
    <>
      <Container>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={satellite} style={cardImageStyle} />
            <Card.Body>
              <Card.Title>Access our satellite data and more</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={power} style={cardImageStyle} />
            <Card.Body>
              <Card.Title>
                Ready to use electricity price projections
              </Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <br />
      <br />
      <Container>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={windTurbineBelow}
              style={cardImageStyle}
            />
            <Card.Body>
              <Card.Title>Wind Turbine Production Forecasts</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={screeningMap} style={cardImageStyle} />
            <Card.Body>
              <Card.Title>Screening maps of weather or production</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
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
