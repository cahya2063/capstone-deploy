export function headerLandingPage() {
  return `

        <li><a href="#/" id="login-button">Dashboard</a></li>
        <li><a href="#" id="login-button">Lokasi</a></li>
        <li><a href="#/login" id="login-button">Login</a></li>
        <li><a href="#/register" id="register-button">Register</a></li>
      `;
}
export function headerLogin() {
  return `

        <li><a href="#/register" id="register-button">Register</a></li>
      `;
}
export function headerRegister() {
  return `

        <li><a href="#/login" id="login-button">Login</a></li>
      `;
}
