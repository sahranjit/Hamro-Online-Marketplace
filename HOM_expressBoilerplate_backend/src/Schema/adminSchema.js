import { Schema } from "mongoose";

export let adminSchema = Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName field is required"],
    },
    lastName: {
      type: String,
      required: [true, "lastName field is required"],
    },
    email: {
      type: String,
      required: [true, "email field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password field is required"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "phoneNumber field is required"],
    },
    address: {
      type: String,
      required: [true, "address field is required"],
    },
    profileImage: {
      type: String,
      required: [true, "profile Image is required"],
    },
  },
  {
    timestamps: true,
  }
);
