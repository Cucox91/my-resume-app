import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";
import { ISubject } from "./SubjectModel";

export interface IEducation extends IBaseDocument {
  _id: string | undefined;
  title: string;
  school: string;
  fromDate: Date;
  toDate?: Date | null;
  responsibilities: string[];
  subjects: ISubject[];
}

const EducationSchema = new Schema<IEducation>({
  title: { type: String, required: true },
  school: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date },
  subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  responsibilities: { type: [String] },
  ...BaseModel,
});

export default mongoose.model<IEducation>("Education", EducationSchema);
