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
  responsibilities: string[];
}

const ExperienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  responsibilities: { type: [String] },
  ...BaseModel
});

export default mongoose.model<IExperience>("Experience", ExperienceSchema);
