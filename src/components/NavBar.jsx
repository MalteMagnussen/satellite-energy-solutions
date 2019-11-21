import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#/" style={{ marginLeft: "37px" }}>
        Satellite Energy Solutions
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Work</Nav.Link>
          <Nav.Link href="#/about">About</Nav.Link>
          <Nav.Link href="#/info/problem">Info</Nav.Link>
          <Nav.Link href="#/team">Team</Nav.Link>
          <NavDropdown title="Data" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/satellite-data">
              Access our Satellite Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" disabled>
              Ready to use Electricity Price Projections
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" disabled>
              Wind Turbine Production Forecasts
            </NavDropdown.Item>
            <NavDropdown.Item href="#/maps">
              Screening Maps of Production
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
