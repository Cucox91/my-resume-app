import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "", //Raziel: In the future fix this for azure. This is taking the hardcoded value for now.
});

export default axiosInstance;
