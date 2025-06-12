const BASE_URL = 'https://caspstone-deploy-production.up.railway.app/'

// == Register == //
export const register = async ({ username, email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Gagal terhubung ke server',
    };
  }
};

// == Login == //
export async function login({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: data.error || 'Login gagal',
      };
    }

    return {
      error: false,
      loginResult: data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Terjadi kesalahan jaringan',
    };
  }
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
