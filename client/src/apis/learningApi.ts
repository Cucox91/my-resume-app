import { ILearning } from "../models/ILearning";
import axiosInstance from "./axiosInstance";

export const getAllLearning = async (): Promise<ILearning[] | null> => {
  const response = await axiosInstance.get("/api/learning");
  return response.data;
};

export const getLearningById = async (id: string): Promise<ILearning | null> => {
  const response = await axiosInstance.get(`/api/learning/${id}`);
  return response.data;
};

export const createLearning = async (data: Partial<ILearning>): Promise<ILearning> => {
  const response = await axiosInstance.post("/api/learning", data);
  return response.data;
};

export const updateLearning = async (id: string, data: Partial<ILearning>): Promise<ILearning> => {
  const response = await axiosInstance.put(`/api/learning/${id}`, data);
  return response.data;
};

export const deleteLearning = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/learning/${id}`);
};
