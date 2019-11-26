import React from "react";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import TeamPage from "./components/team/TeamPage.jsx";
import InfoPage from "./components/info/InfoPage.jsx";
import AboutPage from "./components/about/AboutPage.jsx";
import SatelliteDataPage from "./components/satellite-data/SatelliteDataPage.jsx";
import Maps from "./components/maps/Maps.jsx";
import Projections from "./components/projections/Projections.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <br></br>
      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/team" component={TeamPage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/satellite-data" component={SatelliteDataPage} />
          <Route path="/maps" component={Maps} />
          <Route path="/projections" component={Projections} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </HashRouter>
    </div>
  );
}

const NoMatch = () => {
  return <h1>There is nothing here.</h1>;
};

export default App;
