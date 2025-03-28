// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { ISkill } from "../models/ISkill";
import axiosInstance from "./axiosInstance";

export const getAllSkills = async (): Promise<ISkill[] | null> => {
  const skills = await axiosInstance.get("/api/skills");

  //Raziel: For now let's return a list of Skills. Later we add it to the backend.
  // const Skills = [
  //   {
  //     name: "C#",
  //     yearsOfExperience: 10,
  //   },
  //   {
  //     name: "TypeScript",
  //     yearsOfExperience: 7,
  //   },
  //   {
  //     name: "React",
  //     yearsOfExperience: 7,
  //   },
  //   {
  //     name: "Azure",
  //     yearsOfExperience: 7,
  //   },
  //   {
  //     name: "T-SQL",
  //     yearsOfExperience: 7,
  //   },
  // ];
  return skills.data;
};
