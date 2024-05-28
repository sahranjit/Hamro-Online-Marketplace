/* eslint-disable no-console */
import mongoose from "mongoose";

const connectToMongoDb = () => {
  try {
    mongoose.connect("mongodb://0.0.0.0:27017/onlineAuctionSystem");
    console.log("application is connected to mongodb successfully.");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDb;
