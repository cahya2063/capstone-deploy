import LoginPresenter from './login-presenter';

export default class LoginPage {
  constructor() {
    // this._showError = this.showError.bind(this);
    this.presenter = new LoginPresenter({
      view: this,
    });
  }

  async render() {
    return `
            <div class="container-login">
              <div class="left-side">
                  <div class="content">

                      <p class="title-login">
                          Login Page
                      </p>
                      <p>
                          mohon masukkan email dan password
                      </p>

                      <form action="" id="login-form">
                          <div id="loginError" class="error-message" style="display:none"></div>
                          <input id="email" name="email" class="input-login" type="text" placeholder="masukkan emailmu.." required />
                          <input id="password" name="password" class="input-login" type="password" placeholder="masukkan passwormu.." required />
                          <button type="submit">Login</button>
                      </form>
                      <p>belum punya akun? <a href="#/register">daftar</a></p>
                  </div>
              </div>
              <div class="right-side">
                  <div class="content"></div>
              </div>
          </div>
        `;
  }

  showError(message) {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 5000);
    }
  }
  async afterRender() {
    const navListMain = document.getElementById('navlist-main');
    const navList = document.getElementById('navlist');

    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      await this.presenter.manageLogin({ email, password });
    });
  }
}
