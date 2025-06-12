import ScanPage from '../pages/scan/scan-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import LandingPage from '../pages/landing/landing-page';
import DashboardPage from '../pages/dashboard/dashboard.page';
import WisataPage from '../pages/wisata/wisata-page';
import SaveScanPage from '../pages/save-scan/saveScan-page';

const routes = {
  '/': {
    page: new LandingPage(),
    auth: false,
  },
  '/login': {
    page: new LoginPage(),
    auth: false,
  },
  '/register': {
    page: new RegisterPage(),
    auth: false,
  },
  '/dashboard': {
    page: new DashboardPage(),
    auth: true,
  },
  '/scan': {
    page: new ScanPage(),
    auth: true,
  },
  '/wisata': {
    page: new WisataPage(),
    auth: true,
  },
  '/save-scan': {
    page: new SaveScanPage(),
    auth: true,
  },
};

export default routes;
