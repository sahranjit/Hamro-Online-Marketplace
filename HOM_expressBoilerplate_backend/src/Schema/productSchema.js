import { Schema } from "mongoose";

export let productSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, "product Name field is required"],
    },
    productImage: {
      type: String,
      required: [true, "product Image field is required"],
    },
    description: {
      type: String,
      required: [true, "product description field is required"],
    },
    price: {
      type: Number,
      required: [true, "product price field is required"],
    },
    category: {
      type: Schema.ObjectId,
      ref: "Category",
      required: [true, "category  field is required"],
    },
    user: {
      type: Schema.ObjectId,
      ref: "Seller",
      // required: [true, "user  field is required"],
      required: [true, "category  field is required"],
    },
    // userType: {
    //   type: String,
    //   enum: ["Seller", "Buyer", "Admin"],
    // },
  },
  {
    timestamps: true,
  }
);
