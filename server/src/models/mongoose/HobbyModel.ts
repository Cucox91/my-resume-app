import mongoose, { Schema } from "mongoose";
import { IBaseDocument } from "../IBaseDocument";
import { BaseModel } from "./BaseModel";

export interface IHobby extends IBaseDocument {
  name: string;
  description?: string;
}

const HobbySchema = new Schema<IHobby>({
  name: { type: String, required: true },
  description: { type: String },
  ...BaseModel,
});

export default mongoose.model<IHobby>("Hobby", HobbySchema);
