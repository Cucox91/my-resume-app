// import { AxiosResponse } from "axios";
// import axiosInstance from "./axiosInstance";
import { ISkill } from "../models/ISkill";
import axiosInstance from "./axiosInstance";

export const getAllSkills = async (): Promise<ISkill[] | null> => {
  const skills = await axiosInstance.get("/api/skills");
  return skills.data;
};

export const getSkillById = async (id: string): Promise<ISkill | null> => {
  const skill = await axiosInstance.get(`/api/skills/${id}`);
  return skill.data;
};
