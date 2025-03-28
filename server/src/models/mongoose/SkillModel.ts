import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { IExperience } from "./ExperienceModel";
import { BaseModel } from "./BaseModel";

export interface ISkill extends IBaseDocument {
  id?: string | undefined;
  name: string;
  description?: string;
  yearsOfProffesionalExperience: number;
  yearsOfIndividualExperience: number;
  yearLastUse: number;
  notes: string[];
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  description: { type: String },
  yearsOfProffesionalExperience: { type: Number, required: true },
  yearsOfIndividualExperience: { type: Number, required: true },
  yearLastUse: { type: Number, required: true },
  notes: { type: [String] },
  ...BaseModel,
});

export default mongoose.model<ISkill>("Skill", SkillSchema);
