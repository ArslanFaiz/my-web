import axios from "axios";

const api = axios.create({
  baseURL: "https://technacallcanadabackend-production.up.railway.app/",
});

// Add accessToken to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

// Refresh token logic on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        const res = await axios.post("https://technacallcanadabackend-production.up.railway.app/api/auth/refresh-token", { refreshToken });
        if (res.data.success) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          originalRequest.headers["Authorization"] = `Bearer ${res.data.data.accessToken}`;
          return axios(originalRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
