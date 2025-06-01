import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";
import { headerDashboard } from "../template";

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this._setupDrawer();
    this._initialisation();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener("click", () => {
      this.#navigationDrawer.classList.toggle("open");
    });

    document.body.addEventListener("click", (event) => {
      if (
        !this.#navigationDrawer.contains(event.target) &&
        !this.#drawerButton.contains(event.target)
      ) {
        this.#navigationDrawer.classList.remove("open");
      }

      this.#navigationDrawer.querySelectorAll("a").forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove("open");
        }
      });
    });
  }

  _initialisation() {
    this.#setupNavigationList();

    window.addEventListener("auth-change", () => {
      this.#setupNavigationList();
    });
  }

  #setupNavigationList() {
    const navListMain = document.getElementById("navlist-main");

    const navList = document.getElementById("navlist");

    navListMain.remove();
    navList.innerHTML = headerDashboard();
  }

  async renderPage() {
    const url = getActiveRoute();
    const route = routes[url];
    const page = route ? route.page : routes["/404"].page;
    const isAuth = route ? route.auth : false;

    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender?.();
    } else {
      const transition = document.startViewTransition(async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender?.();
      });
    }
  }
}

export default App;
