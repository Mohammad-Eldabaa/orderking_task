import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { store } from "./store";
import { clearToken } from "./slice";

export const APIClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});

export function isTokenExpire(token) {
  try {
    const { exp, expiresIn } = jwtDecode(token);
    const now = Date.now() / 1000;
    return (exp ?? expiresIn) < now;
  } catch {
    return true;
  }
}

export const publicRoutes = ["/register", "/login"];

APIClient.interceptors.request.use(
  async (config) => {
    if (!publicRoutes.includes(config.url)) {
      const token = store.getState().auth.token;

      if (!token || isTokenExpire(token)) {
        store.dispatch(clearToken());
        return config;
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
