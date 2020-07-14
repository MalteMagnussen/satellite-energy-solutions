/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EcoIcon from '@material-ui/icons/Eco';
// core components/views for Admin layout
import TeamPage from "views/Team/Team.jsx"
import LandingPage from "views/LandingPage/Home"
import Forecasts from "views/Forecasts/LeafletForecasts"

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: DesktopMacIcon,
    component: LandingPage
  },
  {
    path: "/team",
    name: "Team",
    icon: PeopleIcon,
    component: TeamPage,
  },
  {
    path: "/forecast",
    name: "Forecast",
    icon: EcoIcon,
    component: Forecasts
  },
];

export default dashboardRoutes;
