import { Document } from "mongoose";

export interface IBaseDocument extends Document {
  createdDate: Date;
  createdBy: string;
  updatedDate?: Date;
  updatedBy?: string;
}
