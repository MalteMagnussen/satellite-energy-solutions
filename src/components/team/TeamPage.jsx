import React from "react";
import { Card, CardDeck, Row, Col, Image } from "react-bootstrap";
import MalteImg from "./img/Malte.png";
import AugustImg from "./img/August.jpg";
import AndreasImg from "./img/Andreas.jpg";
import teamImg from "./img/team.jpeg";
import Collaborators from "../collaborators/Collaborators";

const TeamPage = () => {
  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Meet the Founders</h1>

      <br></br>
      <br />
      <br />
      <br />
      <MyCards />
      <br></br>
      <br />
      <br />
      <br />
      <br />
      <MeetTheTeam />
      <br />
      <br />
      <br />
      <br />
      <Collaborators />
    </>
  );
};

const MeetTheTeam = () => {
  return (
    <Row>
      <Col md={{ span: 6 }} style={{ marginLeft: "30px" }}>
        <Image fluid src={teamImg} />
      </Col>
      <Col md={{ span: 5 }}>
        <h1>Meet the team</h1>
        <br></br>
        <h4 style={{ textAlign: "justify" }}>
          Tradewind is founded by a team of 3.
          <br />
          Two engineers and a computer scientist.
          <br /> Our diverse background covers: <br />
          <ul>
            <li>Energy system modelling</li>
            <li>Satellite big data management</li>
            <li>IT development</li>
          </ul>
        </h4>
      </Col>
    </Row>
  );
};

const MyCards = () => {
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={AugustImg} />
          <Card.Body>
            <Card.Title>August Zachariae</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Sustainable energy engineer educated at Technical University of
              Denmark. August began his career doing electricity price
              forecasting and economic feasibility studies in Copenhagen. August
              will use his skills in the field to make electricity price
              projections and production forecasts.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="mailto:august_zachariae@hotmail.com">
                august_zachariae@hotmail.com
              </a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={AndreasImg} />
          <Card.Body>
            <Card.Title>Andreas Stokholm</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              As an educated electrical engineer from the Technical University
              of Denmark working at the space institute at the university.
              Andreas has had plenty of experience working with big data from
              satellites.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="mailto:stokholm@space.dtu.dk">stokholm@space.dtu.dk</a>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={MalteImg} />
          <Card.Body>
            <Card.Title>Malte Hviid-Magnussen</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              As a top student at CPH Business studying computer science, Malte
              maintains SES’ IT-systems and websites.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="mailto:maltehviidmagnussen@gmail.com">
                maltehviidmagnussen@gmail.com
              </a>
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  );
};

export default TeamPage;
