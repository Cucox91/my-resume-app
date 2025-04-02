import mongoose, { Schema, Document } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { IUser } from "./UserModel";
import { BaseModel } from "./BaseModel";

export interface IExperience extends IBaseDocument {
  _id: string | undefined;
  title: string;
  company: string;
  fromDate: Date;
  toDate?: Date | null;
  location?: string;
  responsibilities: string[];
  teamSize?: number;
  achievements?: string[];
  skills?: mongoose.Types.ObjectId[];
  projects?: {
    name: string;
    description?: string;
    skills: mongoose.Types.ObjectId[];
  }[];

  // Ideas: Projects, Skills, Duration, Team Size, Achievements, Links,
}

const ExperienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  responsibilities: { type: [String] },
  teamSize: { type: Number },
  location: { type: String },
  achievements: { type: [String] },
  skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
  projects: [
    {
      name: { type: String, required: true },
      description: { type: String },
      skills: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    },
  ],
  ...BaseModel,
});

export default mongoose.model<IExperience>("Experience", ExperienceSchema);
