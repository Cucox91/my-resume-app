// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { IExperience } from "../models/IExperience";
import axiosInstance from "./axiosInstance";

export const getAllExperiences = async (): Promise<IExperience[] | null> => {
  const experiences = await axiosInstance.get("/api/experiences");
  return experiences.data;
};

export const getExperienceById = async (id: string): Promise<IExperience | null> => {
  const education = await axiosInstance.get(`/api/experiences/${id}`);
  return education.data;
};
