import ScanPage from '../pages/scan/scan-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import LandingPage from '../pages/landing/landing-page';

const routes = {
  '/': {
    page: new LandingPage(),
    auth: false,
  },
  '/scan': {
    page: new ScanPage(),
    auth: true,
  },
  '/login': {
    page: new LoginPage(),
    auth: false,
  },
  '/register': {
    page: new RegisterPage(),
    auth: false,
  },
};

export default routes;
