import { Document, model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export enum Role {
  DIRECTOR = "director",
  COLLABORATOR = "colaborador",
}

export interface IUserInput {
  fullName: string;
  role: Role;
  email: string;
  password: string;
}

export type IUser = IUserInput & Document;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.COLLABORATOR,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

userSchema.virtual("travels", {
  ref: "UserTravel",
  localField: "_id",
  foreignField: "travelId",
});

userSchema.plugin(uniqueValidator);

const User = model<IUser>("User", userSchema);

export default User;
