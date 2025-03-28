// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { IExperience } from "../models/IExperience";
import axiosInstance from "./axiosInstance";

export const getAllExperiences = async (): Promise<IExperience[] | null> => {
  const experiences = await axiosInstance.get("/api/experiences");
  return experiences.data;
};
