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
      <section class="form-page">
      <form id="register-form" class="form-card">
        <div id="errorMessage" class="error-message" style="display:none"></div>
          <h1>Register</h1>
          <label for="username">Nama</label>
          <input id="name" name="username" type="text" placeholder="John Doe" required />

          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
          
          <label for="password">Password</label>
          <input id="password" name="password" type="password" placeholder="********" required />
          
          <button type="submit" class="btn">Register</button>
          <p>Sudah punya akun? <a href="#/login">Login</a></p>
        </form>
      </section>
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
