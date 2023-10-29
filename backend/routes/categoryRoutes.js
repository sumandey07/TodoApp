import express from "express";
import createCategory, {
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import AuthMiddleware from "../middleware/index.js";

const categoryRoutes = express.Router();

categoryRoutes.use(AuthMiddleware);

categoryRoutes.route("/").get(getAllCategories);
categoryRoutes.route("/create").post(createCategory);
categoryRoutes.route("/delete/:id").delete(deleteCategory);
categoryRoutes.route("/update").put(updateCategory);

export default categoryRoutes;
