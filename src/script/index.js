import "../styles/style.css";
import image1 from "../public/images/slider/image-slider1.png";
import image2 from "../public/images/slider/image-slider2.png";
import image3 from "../public/images/slider/image-slider3.png";
import image4 from "../public/images/slider/image-slider4.png";
import image5 from "../public/images/slider/image-slider5.png";
import profileCahya from "../public/images/profile/cahya.jpg";
import App from "./pages/app";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    drawerButton: document.querySelector("#drawer-button"),
    navigationDrawer: document.querySelector("#navigation-drawer"),
  });

  await app.renderPage();

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });
});
