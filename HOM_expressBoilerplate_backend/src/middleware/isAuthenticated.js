import { verifyToken } from "../../utlis/token.js";

let isAuthenticated = async (req, res, next) => {
  let { authorization = "" } = req.headers;
  let arr = authorization.split(" ");
  let token = arr[1] || "";
  if (arr[0] === "Bearer" && token) {
    try {
      let info = await verifyToken(token, "productbuysell");
      req.id = info.id;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Token is not valid.",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Token is not valid.",
    });
  }
};
export default isAuthenticated;
