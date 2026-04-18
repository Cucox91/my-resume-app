import { IEducation } from "../models/IEducation";
import axiosInstance from "./axiosInstance";

export const getAllEducation = async (): Promise<IEducation[] | null> => {
  const educations = await axiosInstance.get("/api/education");
  return educations.data;
};

export const getEducationById = async (id: string): Promise<IEducation | null> => {
  const education = await axiosInstance.get(`/api/education/${id}`);
  return education.data;
};

export const createEducation = async (data: Partial<IEducation>): Promise<IEducation> => {
  const response = await axiosInstance.post("/api/education", data);
  return response.data;
};

export const updateEducation = async (id: string, data: Partial<IEducation>): Promise<IEducation> => {
  const response = await axiosInstance.put(`/api/education/${id}`, data);
  return response.data;
};

export const deleteEducation = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/education/${id}`);
};
