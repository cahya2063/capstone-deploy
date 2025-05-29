import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import LandingPage from "../pages/landing/landing-page";

const routes = {
  "/": {
    page: new LandingPage(),
    auth: true,
  },
  "/login": {
    page: new LoginPage(),
    auth: true,
  },
  "/register": {
    page: new RegisterPage(),
    auth: true,
  }
};

export default routes;
