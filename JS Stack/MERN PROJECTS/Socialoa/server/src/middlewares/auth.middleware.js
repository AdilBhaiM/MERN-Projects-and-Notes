import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({ message: "Unauthorized -- No token Provided" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ message: "Unauthorized -- Invalid Token" });
    const user = await User.findById(decoded.userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectedRoute Middleware", error);
    return res.status(500).json({ message: "Internal Server Error -- Protected route Error" });
  }
};
