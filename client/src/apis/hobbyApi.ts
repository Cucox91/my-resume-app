import { IHobby } from "../models/IHobby";
import axiosInstance from "./axiosInstance";

export const getAllHobbies = async (): Promise<IHobby[] | null> => {
  const response = await axiosInstance.get("/api/hobbies");
  return response.data;
};

export const getHobbyById = async (id: string): Promise<IHobby | null> => {
  const response = await axiosInstance.get(`/api/hobbies/${id}`);
  return response.data;
};

export const createHobby = async (data: Partial<IHobby>): Promise<IHobby> => {
  const response = await axiosInstance.post("/api/hobbies", data);
  return response.data;
};

export const updateHobby = async (id: string, data: Partial<IHobby>): Promise<IHobby> => {
  const response = await axiosInstance.put(`/api/hobbies/${id}`, data);
  return response.data;
};

export const deleteHobby = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/hobbies/${id}`);
};
