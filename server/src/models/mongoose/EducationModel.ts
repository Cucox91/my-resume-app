import mongoose, { Schema, Document } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { IUser } from "./UserModel";
import { BaseModel } from "./BaseModel";

export interface IEducation extends IBaseDocument {
  _id: string | undefined;
  title: string;
  school: string;
  fromDate: Date;
  toDate?: Date | null;
  responsibilities: string[];
}

const EducationSchema = new Schema<IEducation>({
  title: { type: String, required: true },
  school: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  responsibilities: { type: [String] },
  ...BaseModel,
});

export default mongoose.model<IEducation>("Education", EducationSchema);
