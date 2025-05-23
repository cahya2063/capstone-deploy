import HomePage from "../pages/home/home-page";
import LandingPage from "../pages/landing/landing-page";

const routes = {
  "/": {
    page: new LandingPage(),
    auth: true,
  },
};

export default routes;
