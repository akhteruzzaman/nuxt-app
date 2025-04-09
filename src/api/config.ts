import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";

// Get the runtime config
const config = useRuntimeConfig();

// Create axios instance
const api = axios.create({
  baseURL: `${config.public.apiBase}/api`, // Added API prefix
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or cookie in browser environment
    if (process.client) {
      const token = localStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Generic error handling
    if (error.response) {
      const { status, data } = error.response;
      console.error(`API Error [${status}]:`, data?.message || error.message);

      if (status === 401) {
        // Handle unauthorized error
        // e.g., redirect to login or refresh token
      } else if (status === 500) {
        // Handle server errors
        console.error("Server error occurred.");
      }
      // Add more status-specific handling if needed
    } else {
      console.error("Network or unknown error:", error.message);
    }

    return Promise.reject(error); // Re-throw the error for further handling if needed
  }
);

export default api;
