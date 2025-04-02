import mongoose, { ObjectId, Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";
import { IEducation } from "./EducationModel";

export interface IConcept {
  title: string;
  summary: string;
  keyPoints: string[];
  tags?: string[];
  relatedApplications?: string[];
}

export interface ISubject extends IBaseDocument {
  id?: string | undefined;
  name: string;
  description?: string;
  semester: number;
  notes: string[];
  biography: string[];
  education: IEducation;
  concepts: IConcept[];
}

const SubjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  description: { type: String },
  semester: { type: Number },
  education: { type: Schema.Types.ObjectId, ref: "Education" },
  notes: { type: [String] },
  biography: { type: [String] },
  concepts: [
    {
      title: { type: String, required: true },
      summary: { type: String, required: true },
      keyPoints: [{ type: String }],
      tags: [{ type: String }],
      relatedApplications: [{ type: String }],
    },
  ],
  ...BaseModel,
});

export default mongoose.model<ISubject>("Subject", SubjectSchema);
