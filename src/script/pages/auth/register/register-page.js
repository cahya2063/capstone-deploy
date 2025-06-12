import RegisterPresenter from './register-presenter';

export default class RegisterPage {
  constructor() {
    this._showError = this.showError.bind(this);
    this.presenter = new RegisterPresenter({
      showError: this._showError,
    });
  }

  async render() {
    return `
        <div class="container-login">
          <div class="left-side">
              <div class="content">

                  <p class="title-register">
                      Register Page
                  </p>
                  <p>
                      mohon masukkan detail anda
                  </p>

                  <form action="" id="register-form">
                      <div id="errorMessage" class="error-message" style="display:none"></div>
                      <input id="name" name="username" class="input-register" type="text" placeholder="daftarkan nama mu.." required />
                      <input id="email" name="email" class="input-register" type="email" placeholder="daftarkan email mu.." required />
                      <input id="password" name="password" class="input-register" type="password" placeholder="masukkan password" required />
                      <button type="submit">Register</button>
                  </form>
                  <p>sudah punya akun? <a href="#/login">login</a></p>
              </div>
          </div>
          <div class="right-side">
              <div class="content"></div>
          </div>
      </div>
    `;
  }

  showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 5000);
  }
  async afterRender() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
      this.presenter.manageRegister(data);
    });
  }
}
