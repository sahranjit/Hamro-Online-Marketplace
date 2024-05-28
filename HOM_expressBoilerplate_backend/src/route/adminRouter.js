import { Router } from "express";
import { createAdmin, login } from "../controller/adminController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { Admin } from "../Schema/model.js";

export let adminRouter = Router();
adminRouter.route("/").post(createAdmin);

adminRouter.route("/profile").get(isAuthenticated, async (req, res, next) => {
  try {
    let result = await Admin.findById(req.id);
    res.status(200).json({
      success: true,
      message: "Admin read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

adminRouter
  .route("/profile/update")
  .patch(isAuthenticated, async (req, res, next) => {
    try {
      let result = await Admin.findByIdAndUpdate(req.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({
        success: true,
        message: "Admin updated Successfully",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  });

adminRouter.route("/login").post(login);
