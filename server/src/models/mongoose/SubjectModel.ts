import mongoose, { ObjectId, Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";
import { IEducation } from "./EducationModel";

export interface ISubject extends IBaseDocument {
  id?: string | undefined;
  name: string;
  description?: string;
  semester: number;
  notes: string[];
  biography: string[];
  education: IEducation;
}

const SubjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  description: { type: String },
  semester: { type: Number },
  education: { type: Schema.Types.ObjectId, ref: "Education" },
  notes: { type: [String] },
  biography: { type: [String] },
  ...BaseModel,
});

export default mongoose.model<ISubject>("Subject", SubjectSchema);
