import { Router } from "express";
import { Product } from "../Schema/model.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

export let productRouter = Router();

productRouter
  .route("/")
  .post(isAuthenticated, async (req, res, next) => {
    let data = req.body;
    data.user = req.id;
    try {
      let result = await Product.create(data);
      res.status(201).json({
        success: true,
        message: "Product added successfully",
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
    let _sort = req.query.sort || undefined;
    let { sort, ...search } = req.query;
    console.log(search);

    try {
      // let result = await Product.find({}).sort(sort).populate("category");
      let result = await Product.find(search).sort(_sort).populate("category");
      res.status(200).json({
        success: true,
        message: "product found successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

productRouter.route("/seller").get(isAuthenticated, async (req, res, next) => {
  console.log(req.id);
  console.log("*******");
  try {
    let result = await Product.find({ user: req.id }).populate("category");
    res.status(200).json({
      success: true,
      message: "product found successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});
productRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let result = await Product.findById(req.params.id)
        .populate("category")
        .populate("user");
      console.log(result);
      res.status(201).json({
        success: true,
        message: "products found successfully",
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
      let result = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        success: true,
        message: "product updated successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .delete(async (req, res, next) => {
    try {
      let result = await Product.findByIdAndDelete(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "product deleted successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });
