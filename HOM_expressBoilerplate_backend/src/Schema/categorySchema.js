import { Schema } from "mongoose";

export let categorySchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"],
      unique: true,
    },
    image: {
      type: String,
      required: [true, "img field is required"],
    },
  },
  {
    timestamps: true,
  }
);
