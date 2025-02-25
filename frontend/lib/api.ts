import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-storage")
    ? JSON.parse(localStorage.getItem("auth-storage")!).state.token
    : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
