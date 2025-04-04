import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";
import { IExperience } from "./ExperienceModel";

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
  experiences: IExperience[];
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
  experiences: [{ type: Schema.Types.ObjectId, ref: "Experience" }],
  ...BaseModel,
});

export default mongoose.model<ISkill>("Skill", SkillSchema);
