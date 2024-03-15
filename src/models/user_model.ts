import mongoose from "mongoose";

export interface IUser {
  email: string;
  password: string;
  _id?: string;
  refreshTokens?: string[];
}

const userSchema = new mongoose.Schema<IUser>({
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    refreshTokens: {
      type: [String],
      required: false,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  });

export default mongoose.model<IUser>("User", userSchema);