import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

const InfoPage = () => {
  const match = "#/info";
  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey={`${match}/problem`}>
            <Nav.Item>
              <Nav.Link href={`${match}/problem`}>Problem</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${match}/customer`}>Customer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${match}/solution`}>Solution</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${match}/value`}>Value</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${match}/financials`}>Financials</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${match}/impact`}>Impact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <HashRouter basename="/info">
            <Switch>
              <Route path={`/problem`} component={Problem} />
              <Route path="/customer" component={Customer} />
              <Route path="/solution" component={Solution} />
            </Switch>
          </HashRouter>
        </Card.Body>
      </Card>
    </>
  );
};

const Problem = () => {
  return (
    <>
      <Card.Title>Problem</Card.Title>
      <Card.Text>
        The renewable energy industry has many actors and fast paced decision
        making. There is however no unified data hub with a consistent data set,
        which is needed for building models or business cases. Furthermore,
        small and medium scaled actors often rely on average prices or
        consultants to evaluate price forecasts and productions for their
        investments.
      </Card.Text>
    </>
  );
};

const Customer = () => {
  return (
    <>
      <Card.Title>Target user / Customer</Card.Title>
      <Card.Text>
        The customer segment we are targeting are wind project operators such as
        HOFOR and Ørsted, and government agencies such as Danish Energy agency.
        We are pursuing these types of customers as we have direct access to
        them in our network. Thus we can get feedback and use our network
        advantage to refine our solutions towards these actors and get our first
        customer from among these.
      </Card.Text>
    </>
  );
};

const Solution = () => {
  return (
    <>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        We will utilize COPERNICUS data to calculate future electricity prices
        using the energy model <a href="http://www.balmorel.com/">BALMOREL</a>.
        We will also utilize technical data on specific wind turbines to predict
        production patterns for wind turbines in the future. Combine this with
        the electricity prices a coherent business case model can be build
        consistent for the entirety of Europe. We have furthermore been in
        contact with the HOFOR who invest and operate wind turbines and have
        shown interest in the solution, and wants to provide feedback throughout
        the development.
      </Card.Text>
      <Button variant="primary" href="http://www.balmorel.com/">
        BALMOREL
      </Button>
    </>
  );
};

const CardExample = () => {
  return (
    <>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </>
  );
};

export default InfoPage;
