// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { IEducation } from "../models/IEducation";
import axiosInstance from "./axiosInstance";

export const getAllEducation = async (): Promise<IEducation[] | null> => {
  const educations = await axiosInstance.get("/api/education");
  return educations.data;
};
