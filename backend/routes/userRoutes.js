import express from "express";
import registerUser, {
  deleteUser,
  loginUser,
} from "../controllers/userController.js";
import AuthMiddleware from "../middleware/index.js";

const userRoutes = express.Router();

userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);

userRoutes.use(AuthMiddleware);
userRoutes.route("/delete/:id").delete(deleteUser);

export default userRoutes;
