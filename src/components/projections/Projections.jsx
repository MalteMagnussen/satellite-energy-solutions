import React, { useState } from "react";
import {
  Card,
  Nav,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Modal
} from "react-bootstrap";
import GB from "./imgs/GreatBritain.jpg";
import prices, { countryNames, years } from "./prices.jsx";

const Projections = () => {
  const [modalShow, setModalShow] = useState(false);
  const [countryName, setCountryName] = useState("");

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
            <MyCard
              setModalShow={setModalShow}
              setCountryName={setCountryName}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <MyModal
          show={modalShow}
          setModalShow={setModalShow}
          countryName={countryName}
        />
      </div>
    </>
  );
};

const MyModal = ({ show, setModalShow, countryName }) => {
  const onHide = () => setModalShow(false);
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {countryName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>[Insert table with data for {countryName}]</h4>
      </Modal.Body>
    </Modal>
  );
};

const MyCard = ({ setModalShow, setCountryName }) => {
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
          <MyDropdown
            setModalShow={setModalShow}
            setCountryName={setCountryName}
          />
        </Card.Body>
      </Card>
    </>
  );
};

const MyDropdown = ({ setModalShow, setCountryName }) => {
  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Select Country">
        {countryNames.map((name, index) => (
          <Dropdown.Item
            key={index}
            as="button"
            onClick={() => {
              setModalShow(true);
              setCountryName(name);
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
};

export default Projections;
