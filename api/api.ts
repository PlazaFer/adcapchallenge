import axios from "axios";

const BackendApi = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

BackendApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default BackendApi;
