import profileCahya from '../public/images/profile/cahya.jpg';
import profileMelin from '../public/images/profile/melin.jpeg';
import profileRama from '../public/images/profile/rama.jpeg';
import profileRois from '../public/images/profile/rois.jpg';
import profileSalsa from '../public/images/profile/salsa.jpeg';
import borobudur from '../public/images/borobudur.jpg';
import cameraGif from '../public/images/slider/scan.gif';
import '../styles/style.css';
import App from './pages/app';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });


  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
