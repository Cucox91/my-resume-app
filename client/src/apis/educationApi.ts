// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { IEducation } from "../models/IEducation";

// export const getAllEducation = async (): Promise<AxiosResponse | null> => {
export const getAllEducation = async (): Promise<IEducation[] | null> => {
  //Raziel: For now let's return a list of educations. Later we add it to the backend.
  const educations = [
    {
      title: "B.Sc. Computer Sciences",
      school: "Havana University",
      where: "Havana, Cuba",
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
      userId: "",
    },
    {
      title: "Computer Programming Technical High School",
      school: "I.P.I Gervacio Cabreras",
      where: "Havana, Cuba",
      fromDate: new Date(),
      toDate: new Date(),
      responsibilities: ["R1", "R2", "R3"],
      userId: "",
    },
  ];
  return educations;
};
