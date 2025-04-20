import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  latestUpdate: Date | null;
  bioCliche: string;
  bioHonest: string;
  avatar: {
    data: Buffer;
    contentType: string;
  };
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  bioCliche: { type: String },
  bioHonest: { type: String },
  latestUpdate: { type: Date },
  avatar: {
    data: Buffer,
    contentType: String, // store MIME type, e.g., "image/jpeg"
  },
});

export default model<IUser>("User", UserSchema);
