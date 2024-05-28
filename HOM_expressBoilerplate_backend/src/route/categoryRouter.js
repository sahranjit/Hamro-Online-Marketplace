import { Router } from "express";
import { Category } from "../Schema/model.js";

export let categoryRouter = Router();

categoryRouter
  .route("/")

  .post(async (req, res, next) => {
    let data = req.body;
    try {
      let result = await Category.create(data);
      res.status(201).json({
        success: true,
        message: "Categories added successfully",
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
      let result = await Category.find({});
      res.status(200).json({
        success: true,
        message: "Category found successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

categoryRouter
  .route("/:id")

  //here is a error in code
  .get(async (req, res, next) => {
    try {
      let result = await Category.findById(req.params.id);
      res.status(201).json({
        success: true,
        message: "Category found successfully",
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
      let result = await Category.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "Category updated successfully",
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
      let result = await Category.findByIdAndDelete(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "Category deleted successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });
