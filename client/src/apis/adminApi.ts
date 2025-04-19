import axiosInstance from "./axiosInstance";
import { IUser } from "../models/IUser";

export const getUserDetails = async (username: string): Promise<IUser | null> => {
  const user = await axiosInstance.get(`/api/auth/user/${username}`);
  return user.data;
};

export const saveUserDetails = async (username: string, values: IUser): Promise<IUser | null> => {
  const user = await axiosInstance.post(`/api/auth/user/${username}`, values);
  return user.data;
};
