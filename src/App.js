import React from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import TeamPage from "./components/TeamPage.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <HashRouter>
          <Route path="/team" component={TeamPage} />
          <Route exact path="/" component={HomePage} />
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
