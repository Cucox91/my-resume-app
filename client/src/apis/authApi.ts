import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

// Login the User into the App
export const loginUser = async (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  const result = await axiosInstance.post("/api/auth/login", {
    username,
    password,
  });
  const { token } = result.data;
  localStorage.setItem("token", token);
  return result;
};

// Register a new User.
export const registerUser = async (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  const result = await axiosInstance.post("/api/auth/register", {
    username,
    password,
  });
  const { token } = result.data;
  localStorage.setItem("token", token);
  return result;
};
