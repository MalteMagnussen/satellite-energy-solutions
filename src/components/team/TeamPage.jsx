import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import MalteImg from "./img/Malte.png";
import AugustImg from "./img/August.jpg";
import AndreasImg from "./img/Andreas.jpg";

const TeamPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meet the founders</h1>

      <br></br>
      <br />
      <br />
      <br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={AugustImg} />
          <Card.Body>
            <Card.Title>August Zachariae</Card.Title>
            <Card.Text>
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
            <Card.Text>
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
            <Card.Text>
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
      <br></br>
      <br />
    </>
  );
};

export default TeamPage;
