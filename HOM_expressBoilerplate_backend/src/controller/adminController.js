import { generateToken } from "../../utlis/token.js";
import { Admin } from "../Schema/model.js";

export let createAdmin = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await Admin.create(data);
    res.status(201).json({
      success: true,
      message: "Product added Successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let login = async (req, res, next) => {
  let result = await Admin.findOne({ email: req.body.email });
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
};
