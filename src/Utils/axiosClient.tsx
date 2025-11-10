import axios from "axios";
import type { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5500/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Handle expired sessions globally
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            console.warn("Session expired or user not authenticated.");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
