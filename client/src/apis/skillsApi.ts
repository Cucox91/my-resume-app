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

export const createSkill = async (data: Partial<ISkill>): Promise<ISkill> => {
  const response = await axiosInstance.post("/api/skills", data);
  return response.data;
};

export const updateSkill = async (id: string, data: Partial<ISkill>): Promise<ISkill> => {
  const response = await axiosInstance.put(`/api/skills/${id}`, data);
  return response.data;
};

export const deleteSkill = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/skills/${id}`);
};
