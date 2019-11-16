import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import TeamPage from "./components/team/TeamPage.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <HashRouter>
          <Route path="/team" component={TeamPage} />
          <Route path="/info" />
          <Route exact path="/" component={HomePage} />
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
