import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import TeamPage from "./components/team/TeamPage.jsx";
import InfoPage from "./components/info/InfoPage.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <HashRouter>
          <Switch>
            <Route path="/team" component={TeamPage} />
            <Route path="/info" component={InfoPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </HashRouter>
      </Container>
    </div>
  );
}

const NoMatch = () => {
  return <h1>There is nothing here.</h1>;
};

export default App;
