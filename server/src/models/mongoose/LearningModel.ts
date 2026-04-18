import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";

export enum LearningStatus {
  InProgress = "in-progress",
  Completed = "completed",
  Planned = "planned",
}

export interface ILearning extends IBaseDocument {
  name: string;
  description?: string;
  status: LearningStatus;
  url?: string;
}

const LearningSchema = new Schema<ILearning>({
  name: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: Object.values(LearningStatus),
    required: true,
  },
  url: { type: String },
  ...BaseModel,
});

export default mongoose.model<ILearning>("Learning", LearningSchema);
