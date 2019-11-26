import React from "react";
import { Card, Nav, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import GB from "./imgs/GreatBritain.jpg";

const Projections = () => {
  const myHeaderStyle = { marginLeft: "50px" };
  const MyBackgroundImage = {
    backgroundImage: "url(" + GB + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "1200px"
  };
  return (
    <>
      <h1 style={myHeaderStyle}>Energy Price Projections</h1>
      <h3 style={myHeaderStyle}>[Under Construction]</h3>
      <div style={MyBackgroundImage}>
        <br />
        <br />
        <Row>
          <Col>
            <MyCard />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
};

const MyCard = () => {
  const URL = "#/projections";
  return (
    <>
      <Card style={{ marginLeft: "50px" }}>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey={`${URL}`}>
            <Nav.Item>
              <Nav.Link href={`${URL}/point`} disabled>
                Point
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`${URL}`}>Country</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Search by country name</Card.Title>
          <Card.Text>
            <MyDropdown />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const MyDropdown = () => {
  // France, Great Britain, Denmark, Sweden, Netherlands, Germany.
  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Select Country">
        <Dropdown.Item as="button">France</Dropdown.Item>
        <Dropdown.Item as="button">Great Britain</Dropdown.Item>
        <Dropdown.Item as="button">Denmark</Dropdown.Item>
        <Dropdown.Item as="button">Sweden</Dropdown.Item>
        <Dropdown.Item as="button">Netherlands</Dropdown.Item>
        <Dropdown.Item as="button">Germany</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default Projections;
