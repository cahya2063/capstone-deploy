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

export async function predict(imageFile) {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await fetch('http://127.0.0.1:8000/api/predict', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.error) {
      return {
        status: 'failed',
        message: 'gagal melakukan scanning',
      };
    } else {
      return result;
    }
  } catch (error) {
    return {
      status: 'failed',
      message: 'gagal mengirim gambar',
    };
  }
}
