import { Router } from "express";
import { Buyer } from "../Schema/model.js";
import { generateToken } from "../../utlis/token.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

export let buyerRouter = Router();
buyerRouter
  .route("/")

  .post(async (req, res, next) => {
    let data = req.body;
    try {
      let result = await Buyer.create(data);
      res.status(201).json({
        success: true,
        message: "Register Successfully",
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
      let result = await Buyer.find();
      res.status(200).json({
        success: true,
        message: "Buyer found Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

buyerRouter.route("/login").post(async (req, res, next) => {
  let result = await Buyer.findOne({ email: req.body.email });
  console.log(result);
  if (result === null) {
    res.status(400).json({
      success: false,
      message: "Result not found",
    });
  } else {
    if (req.body.password === result.password) {
      console.log(true);
      //generate token then send response
      let info = {
        id: result._id,
      };

      let expiryInfo = {
        expiresIn: "365d",
      };
      let token = await generateToken(info, "productbuysell", expiryInfo);

      res.status(200).json({
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

buyerRouter.route("/profile").get(isAuthenticated, async (req, res, next) => {
  try {
    let result = await Buyer.findById(req.id);
    res.status(200).json({
      success: true,
      message: "buyers read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

buyerRouter
  .route("/profile/update")
  .patch(isAuthenticated, async (req, res, next) => {
    try {
      let result = await Buyer.findByIdAndUpdate(req.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({
        success: true,
        message: "buyers updated Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

buyerRouter
  .route("/:id")
  .delete(async (req, res, next) => {
    try {
      let result = await Buyer.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Buyers deleted Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  })
  .patch(async (req, res, next) => {
    try {
      let result = await Buyer.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        success: true,
        message: "Buyers updated Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  })
  .get(async (req, res, next) => {
    try {
      let result = await Buyer.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "Buyers with specific id  found Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });
