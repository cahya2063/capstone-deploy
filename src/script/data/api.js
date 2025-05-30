export async function login({ email, password }) {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('login response', data);

    if (!data) {
      return {
        error: true,
        message: data.message || 'login gagal',
      };
    }

    return {
      error: false,
      loginResult: data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'terjadi kesalahan',
    };
  }
}
export async function register({ username, email, password }) {
  const response = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  console.log('berhasil register', response);
  const responseJson = await response.json();
  return { ...responseJson, ok: response.ok };
}
