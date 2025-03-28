import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";
import { IExperience } from "../models/IExperience";

// export const getAllExperiences = async (): Promise<AxiosResponse | null> => {
export const getAllExperiences = async (): Promise<IExperience[] | null> => {
  //Raziel: For now let's return a list of experiences. Later we add it to the backend.
  const experiences = [
    {
        title: "Software Engineer",
        company: "Florida Department of Transportation",
        fromDate: new Date(),
        toDate: new Date(),
        responsibilities: ["R1", "R2", "R3"]
    },

  ]
  return experiences;
};
