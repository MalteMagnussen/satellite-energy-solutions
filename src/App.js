import React from "react";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import TeamPage from "./components/team/TeamPage.jsx";
//import InfoPage from "./components/info/InfoPage.jsx";
//import AboutPage from "./components/about/AboutPage.jsx";
// import SatelliteDataPage from "./components/satellite-data/SatelliteDataPage.jsx";
// import Maps from "./components/maps/Maps.jsx";
// import Projections from "./components/projections/Projections.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
//import Collaborators from "./components/collaborators/Collaborators.jsx";
import Media from "./components/media/Media.jsx";
import Forecasts from "./components/forecasts/LeafletForecasts.jsx";
//import ForecastsGoogle from "./components/forecasts/GoogleForecasts.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/team" component={TeamPage} />
          {/* <Route path="/info" component={InfoPage} /> */}
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="/satellite-data" component={SatelliteDataPage} /> */}
          {/* <Route path="/maps" component={Maps} /> */}
          {/* <Route path="/projections" component={Projections} /> */}
          <Route path="/media" component={Media} />
          {/* <Route path="/collaborators" component={Collaborators} /> */}
          <Route path="/forecasts" component={Forecasts} />
          {/* <Route path="/forecastsgoogle" component={ForecastsGoogle} /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </HashRouter>
    </div>
  );
}

const NoMatch = () => {
  return (
    <>
      <br />
      <h1 style={{ marginLeft: 30 }}>There is nothing here.</h1>
    </>
  );
};

export default App;
