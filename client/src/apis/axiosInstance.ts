import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://localhost:5001", //Raziel: In the future fix this for azure. This is taking the hardcoded value for now.
});

export default axiosInstance;
