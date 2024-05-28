import { model } from "mongoose";
import { sellerSchema } from "./sellerSchema.js";
import { buyerSchema } from "./buyerSchema.js";
import { adminSchema } from "./adminSchema.js";
import { productSchema } from "./productSchema.js";
import { categorySchema } from "./categorySchema.js";

export let Seller=model ("Seller",sellerSchema)
export let Buyer=model ("Buyer",buyerSchema)
export let Admin=model ("Admin",adminSchema)
export let Product=model ("Product",productSchema)
export let Category=model ("Category",categorySchema)