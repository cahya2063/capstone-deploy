import { API_URL } from "../config";

const ENDPOINTS = {
  REGISTER: `${API_URL.BASE_URL}/register`,
  LOGIN: `${API_URL.BASE_URL}/login`,
};
export async function login({ email, password }) {
  try {
    const response = await fetch(ENDPOINTS.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        error: true,
        message: data.message || "Login gagal",
      };
    }

    return {
      error: false,
      loginResult: data.loginResult,
    };
  } catch (error) {
    return {
      error: true,
      message: "Terjadi kesalahan jaringan",
    };
  }
}