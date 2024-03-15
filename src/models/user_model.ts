import mongoose from "mongoose";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  refreshTokens?: string[];
  profilePicture?: Buffer;
}

const userSchema = new mongoose.Schema<IUser>({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
  },
  profilePicture: {
    type: Buffer,
    // todo: set to true
    required: false,
  }
});

export default mongoose.model<IUser>("User", userSchema);