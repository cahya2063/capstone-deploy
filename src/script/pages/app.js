import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import { headerLandingPage, headerLogin, headerNotLogin, headerRegister } from '../template';

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
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (
        !this.#navigationDrawer.contains(event.target) &&
        !this.#drawerButton.contains(event.target)
      ) {
        this.#navigationDrawer.classList.remove('open');
      }

      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      });
    });
  }

  _initialisation() {
    this.#setupNavigationList();

    window.addEventListener('auth-change', () => {
      this.#setupNavigationList();
    });

    window.addEventListener('hashchange', () => {
      this.renderPage(); // render ulang konten halaman
      this.#setupNavigationList(); // ganti header sesuai halaman
    });
  }

  #setupNavigationList() {
    const navListMain = document.getElementById('navlist-main');
    const navList = document.getElementById('navlist');

    if (navListMain) navListMain.remove(); // hapus nav lama

    const url = getActiveRoute();

    // Tentukan header berdasarkan halaman
    let headerHTML = '';
    if (url === '/' || url === '') {
      headerHTML = headerLandingPage();
    } else if (url === '/login') {
      headerHTML = headerLogin();
    } else if (url === '/register') {
      headerHTML = headerRegister();
    } else {
      headerHTML = headerLandingPage(); // default
    }

    navList.innerHTML = headerHTML;
  }

  async renderPage() {
    const url = getActiveRoute();
    const route = routes[url];
    const page = route ? route.page : routes['/404'].page;
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
