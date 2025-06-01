export function headerLandingPage() {
  return `

        <li><a href="#/" id="login-button">Dashboard</a></li>
        <li><a href="#/scan" id="scan-button">Scan</a></li>
        <li><a href="#/login" id="login-button">Login</a></li>
        <li><a href="#/register" id="register-button">Register</a></li>
      `;
}

export function headerDashboard() {
  return `
      <li><a href="#/" id="login-button">Dashboard</a></li>
      <li><a href="#/scan" id="scan-button">Scan</a></li>
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
