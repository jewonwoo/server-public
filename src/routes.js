import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import VisibilityIcon from '@material-ui/icons/Visibility';
import InsertChartIcon from '@material-ui/icons/InsertChart';
//import DashboardPage from "views/Dashboard/Dashboard.js";
import Introductions from "views/Introduction/Introduction";
import Newspapers from "views/Newspapers/Newspapers";
import Exhibits from "views/Exhibits/Exhibits";
import Data from "views/Data/Data";

const homeRoutes = [
  {
    path: "/introduction",
    name: "Introduction",
    icon: Dashboard,
    component: Introductions,
    layout: "/home"
  },
  {
    path: "/newspapers",
    name: "Newspapers",
    icon: LibraryBooks,
    component: Newspapers,
    layout: "/home"
  },
  {
    path: "/exhibits",
    name: "Exhibits",
    icon: VisibilityIcon,
    component: Exhibits,
    layout: "/home"
  },
  {
    path: "/data",
    name: "Data",
    icon: InsertChartIcon,
    component: Data,
    layout: "/home"
  }
];

export default homeRoutes;