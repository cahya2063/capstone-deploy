import { register } from '../../../data/api';

export default class RegisterPresenter {
  constructor({ showError }) {
    this._showError = showError;
  }

  async manageRegister({ username, email, password }) {
    try {
      if (password.length < 8) {
        throw new Error('isikan password minimal 8 karakter');
      }

      const response = await register({ username, email, password });

      if (!response.ok) {
        throw new Error(response.message || 'Registrasi gagal');
      }
      window.location.hash = '/login';
    } catch (error) {
      this._showError(error.message);
    }
  }
}
