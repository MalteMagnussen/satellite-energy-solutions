import React, { useState } from "react";
import {
  Navbar,
  Nav,
  //NavDropdown
} from "react-bootstrap";

const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("#/");
  // style={{ backgroundColor: "#D5F5E3" }}
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand
        onClick={() => setSelectedNavItem("#/")}
        href="#/"
        style={{ marginLeft: "37px" }}
      >
        Tradewind
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={selectedNavItem}
          onSelect={(selectedKey) => setSelectedNavItem(selectedKey)}
          defaultActiveKey="#/"
        >
          {/* <Nav.Link href="#/">Work</Nav.Link> */}
          <Nav.Link href="#/forecasts">Forecasting</Nav.Link>
          {/* <Nav.Link href="#/about">About</Nav.Link> */}
          {/* <Nav.Link href="#/info/problem">Info</Nav.Link> */}
          <Nav.Link href="#/team">Team</Nav.Link>
          <Nav.Link href="#/media">Media</Nav.Link>
          {/* <Nav.Link href="#/collaborators">Collaborators</Nav.Link> */}
          {/* <NavDropdown title="Data" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/satellite-data">
              Access our Satellite Data
            </NavDropdown.Item>
            <NavDropdown.Item href="#/projections">
              Ready to use Electricity Price Projections
            </NavDropdown.Item>
            <NavDropdown.Item href="#/forecasts">
              Wind Turbine Production Forecasts
            </NavDropdown.Item>
             <NavDropdown.Item href="#/googleforecasts">
              Wind Turbine Production Forecasts - Google
            </NavDropdown.Item> 
            <NavDropdown.Item href="#/maps">
              Screening Maps of Production
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
