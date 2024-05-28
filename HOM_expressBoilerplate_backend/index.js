import express, { json } from "express";
import connectToMongoDb from "./src/connectdb/connectToMongoDb.js";
import { adminRouter } from "./src/route/adminRouter.js";
import { buyerRouter } from "./src/route/buyerRouter.js";
import { sellerRouter } from "./src/route/sellerRouter.js";
import { productRouter } from "./src/route/productRouter.js";
import { categoryRouter } from "./src/route/categoryRouter.js";
import fileUploadRouter from "./src/route/fileRouter.js";
import cors from "cors";

let expressApp = express();
expressApp.use(cors());
expressApp.use(express.static("./public"));

connectToMongoDb();
expressApp.use(json()); //it is done to make our application to accept json data
expressApp.use("/sellers", sellerRouter);
expressApp.use("/buyers", buyerRouter);
expressApp.use("/admins", adminRouter);
expressApp.use("/products", productRouter);
expressApp.use("/categorys", categoryRouter);
expressApp.use("/files", fileUploadRouter);

expressApp.listen(8000, () => {
  console.log("app is listening at port 8000");
});
