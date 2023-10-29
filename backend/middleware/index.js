import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const AuthMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "You must be logged in" });
    }
    const token = authorization;
    const { _id } = jwt.verify(token, "express");
    const existingUser = await User.findOne({ _id });

    if (existingUser) {
      req.user = existingUser.id;
    }

    next();
  } catch (error) {
    console.log("Error in AuthenticationMiddleware", error.message);
    throw error;
  }
};

export default AuthMiddleware;
