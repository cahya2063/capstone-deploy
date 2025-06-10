import { login } from '../../../data/api';

class LoginPresenter {
  constructor({ view }) {
    this._view = view;
  }

  async manageLogin({ email, password }) {
    if (password.length < 8) {
      this._view.showError('Minimal password 8 karakter nihh');
      return;
    }

    const { error, loginResult } = await login({ email, password });
    try {
      console.log('login result', loginResult);

      if (error) {
        this._view.showError('Email atau password salah');
        return;
      }

      localStorage.setItem('token', loginResult.data.token);
      window.dispatchEvent(
        new CustomEvent('auth-change', {
          detail: { isLoggedIn: true },
        }),
      );

      window.location.hash = '#/dashboard';
    } catch (error) {
      this._view.showError(loginResult.message);
    }
  }
}

export default LoginPresenter;
