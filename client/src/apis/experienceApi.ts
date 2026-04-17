import { IExperience } from "../models/IExperience";
import axiosInstance from "./axiosInstance";

export const getAllExperiences = async (): Promise<IExperience[] | null> => {
  const experiences = await axiosInstance.get("/api/experiences");
  return experiences.data;
};

export const getExperienceById = async (id: string): Promise<IExperience | null> => {
  const experience = await axiosInstance.get(`/api/experiences/${id}`);
  return experience.data;
};

export const createExperience = async (data: Partial<IExperience>): Promise<IExperience> => {
  const response = await axiosInstance.post("/api/experiences", data);
  return response.data;
};

export const updateExperience = async (id: string, data: Partial<IExperience>): Promise<IExperience> => {
  const response = await axiosInstance.put(`/api/experiences/${id}`, data);
  return response.data;
};

export const deleteExperience = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/experiences/${id}`);
};
