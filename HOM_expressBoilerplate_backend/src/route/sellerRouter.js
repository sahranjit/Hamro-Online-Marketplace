import { Router } from "express";
import { Seller } from "../Schema/model.js";
import { generateToken } from "../../utlis/token.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

export let sellerRouter = Router();
sellerRouter
  .route("/")

  .post(async (req, res, next) => {
    let data = req.body;
    try {
      let result = await Seller.create(data);
      res.status(201).json({
        success: true,
        message: "Sellers Added Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await Seller.find({});
      res.status(200).json({
        success: true,
        message: "Sellers found Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

sellerRouter.route("/profile").get(isAuthenticated, async (req, res, next) => {
  try {
    let result = await Seller.findById(req.id);
    res.status(200).json({
      success: true,
      message: "Sellers read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

sellerRouter
  .route("/profile/update")
  .patch(isAuthenticated, async (req, res, next) => {
    try {
      let result = await Seller.findByIdAndUpdate(req.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({
        success: true,
        message: "Sellers updated Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

sellerRouter.route("/login").post(async (req, res, next) => {
  let result = await Seller.findOne({ email: req.body.email });
  console.log(result);
  if (result === null) {
    res.status(400).json({
      success: false,
      message: "Result not found",
    });
  } else {
    if (req.body.password === result.password) {
      //generate token then send response
      let info = {
        id: result._id,
      };

      let expiryInfo = {
        expiresIn: "365d",
      };
      let token = await generateToken(info, "productbuysell", expiryInfo);

      res.json({
        success: true,
        message: "login successful.",
        result: token,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  }
});

sellerRouter
  .route("/:id")
  .delete(async (req, res, next) => {
    try {
      let result = await Seller.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Sellers deleted Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let result = await Seller.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        success: true,
        message: "Sellers updated Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await Seller.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "Sellers with specific id  found Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });
