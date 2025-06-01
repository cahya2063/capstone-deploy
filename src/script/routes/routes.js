import HomePage from "../pages/home/home-page";
import LandingPage from "../pages/landing/landing-page";
import ScanPage from "../pages/scan/scan-page";

const routes = {
  "/": {
    page: new LandingPage(),
    auth: true,
  },
  "/scan": {
    page: new ScanPage(),
    auth: false,
  },
};

export default routes;
