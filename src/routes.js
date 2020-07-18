// @material-ui/icons
import PeopleIcon from '@material-ui/icons/People';
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
