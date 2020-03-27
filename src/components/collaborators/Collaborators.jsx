import React from "react";
import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import CopernicusMissionPatch from "./presskit/MissionPatch19.png";
// import ParsecLogo from "./presskit/fb-opengraph.png";
import ParsecLogo from "./presskit/2 PARSEC Accelerator LOGO official blue.png";
import SkylabIgnitePhoto from "./presskit/skylab-ignite.PNG";

const align = { textAlign: "justify" };

const imageStyle = { height: 400 };

const Collaborators = () => {
  return (
    <>
      <h1 className="text-center">Our Collaborators</h1>
      <br />
      <h3 className="text-center">Accelerators we're a part of</h3>
      <CardGroup>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Copernicus Accelerator</Card.Title>
            <Card.Text>
              <CopernicusText />
            </Card.Text>
            <Button
              variant="primary"
              href="https://accelerator.copernicus.eu/"
              target="_blank"
            >
              Visit their site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">Joined in Fall 2019</Card.Footer>
          <Card.Img
            variant="bottom"
            src={CopernicusMissionPatch}
            style={imageStyle}
          />
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Parsec Accelerator</Card.Title>
            <Card.Text>
              <ParsecText />
            </Card.Text>
            <Button
              variant="primary"
              href="https://parsec-accelerator.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit their site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Joined in January 2020
          </Card.Footer>
          <Card.Img variant="bottom" style={imageStyle} src={ParsecLogo} />
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Skylab Ignite</Card.Title>
            <Card.Text>
              <IgniteText />
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.skylab.dtu.dk/programmes-and-services/skylab_ignite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit their site
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Joined in February 2020
          </Card.Footer>
          <Card.Img
            style={imageStyle}
            variant="bottom"
            src={SkylabIgnitePhoto}
          />
        </Card>
      </CardGroup>
    </>
  );
};

const CopernicusText = () => {
  return (
    <p style={align}>
      The Copernicus Accelerator prepares 50 of Europe’s boldest innovators for
      scalable success by creating a challenging, inspiring and supportive
      environment to learn and grow. The 12-month acceleration programme is
      designed explicitly for driven entrepreneurs and start-ups ready to turn
      their transformative business cases into impactful commercial solutions.
    </p>
  );
};

const ParsecText = () => {
  return (
    <>
      <p style={align}>
        Tradewind has indirectly received funding from the European Union’s
        Horizon 2020 research and innovation program, via an Open Call issued
        and executed under project PARSEC (grant agreement No 824478)
        <br></br>
        The holistic two-stage acceleration programme will distribute a total of
        €2.5 Million equity-free funding to 100 beneficiaries, alongside other
        key resources (coaching, matchmaking, promotion) needed to develop and
        launch 15 new products and services into the market. PARSEC will also
        provide a suite of{" "}
        <a
          href="https://parsec-accelerator.eu/business-catalysts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          business catalysts
        </a>{" "}
        for transforming data into market-ready services. The first Open Call
        for applications was held between 20 September 2019 and 3 January 2020.
        The second Open Call will be launched in spring 2020.
      </p>
    </>
  );
};

const IgniteText = () => {
  return (
    <>
      <p style={align}>
        DTU Skylab Ignite is a 10 week early stage startup acceleration program
        suited for students and researchers. The program consists of individual
        1:1 team sessions with professional coaches, network building workshops
        with all participants together, and a final pitching event with 50.000
        DKK in prizes. There is a new round each semester, and each batch has 10
        top motivated high tech (pre)startups.
      </p>
    </>
  );
};

export default Collaborators;
