import React from "react";
import { Card, Nav, Button, ListGroup, Image } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";
import styles from "./infoStyle.module.css";

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
              <Route path="/value" component={Value} />
              <Route path="/financials" component={Financials} />
              <Route path="/impact" component={Impact} />
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

const Value = () => {
  return (
    <>
      <Card.Title>Four Unique Value Propositions</Card.Title>
      <Card.Text>
        <ListGroup>
          <ListGroup.Item>
            User-friendly wind & electricity price data access
          </ListGroup.Item>
          <ListGroup.Item>
            Improves concurrent electricity price estimation with price margins
          </ListGroup.Item>
          <ListGroup.Item>
            Electricity price & wind production forecasting – near and long term
          </ListGroup.Item>
          <ListGroup.Item>
            Consistent database for the entirety of Europe
          </ListGroup.Item>
        </ListGroup>
      </Card.Text>
    </>
  );
};

const Financials = () => {
  return (
    <>
      <Card.Title>Financials</Card.Title>
      <Card.Text>
        The data and services will be used to create an online platform, with a
        subscription-based business model. Subscribing companies will be charged
        an annual fee depending on the company size. We plan to build our
        business model based on the business model Wind Europe utilizes.
      </Card.Text>
      <Button
        variant="primary"
        href="https://windeurope.org/wp-content/uploads/files/membership/WindEurope-Membership-Contract.pdf"
      >
        Wind Europe Contract
      </Button>
    </>
  );
};

const Impact = () => {
  return (
    <>
      <Card.Title>Impact</Card.Title>
      <Card.Text>
        We hope that our platform can aid in an efficient transition of the
        energy sector. Aiding companies with correct evaluations and analysis
        will lead to informed decision making on the green energy sector to the
        benefit of SDG 7 “affordable and clean energy”.
        <br />
        <Image
          src={require("./sdg.png")}
          rounded
          className={styles.greenImage}
        />
      </Card.Text>
    </>
  );
};

export default InfoPage;
