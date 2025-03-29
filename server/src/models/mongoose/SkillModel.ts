import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { IExperience } from "./ExperienceModel";
import { BaseModel } from "./BaseModel";

export enum ConfidenceLevel {
  Beginner = "beginner",
  Medium = "medium",
  High = "high",
}

export interface ISkill extends IBaseDocument {
  id?: string | undefined;
  name: string;
  description?: string;
  confidence: ConfidenceLevel;
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
  confidence: {
    type: String,
    enum: Object.values(ConfidenceLevel),
    required: true,
  },
  ...BaseModel,
});

export default mongoose.model<ISkill>("Skill", SkillSchema);
