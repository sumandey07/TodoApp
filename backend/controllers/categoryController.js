import Category from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
  try {
    const { user } = req;
    const categories = await Category.find({
      user: user,
    });
    return res.send(categories);
  } catch (error) {
    console.log("Error Fetching the Categories.", error.message);
    res.send({ error: "Something went wrong" });
    throw error;
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, icon, color, isEditable } = req.body;
    const { user } = req;
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(409).send("Category already exists");
    }

    const category = await Category.create({
      name: name,
      icon: icon,
      color: color,
      isEditable: isEditable,
      user: user,
    });
    res.send(category);
  } catch (error) {
    console.log("Error Creating the Category.", error.message);
    res.send({ error: "Something went wrong" });
    throw error;
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.deleteMany({ _id: id });
    res.send({ message: "Category deleted successfully" });
  } catch (error) {
    console.log("Error deleting the category.", error.message);
    res.send({ error: "Something went wrong" });
    throw error;
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { _id, name, icon, color, isEditable } = req.body;
    await Category.updateOne(
      { _id },
      {
        $set: {
          name: name,
          icon: icon,
          color: color,
          isEditable: isEditable,
        },
      }
    );
    res.send({ message: "Category updated successfully" });
  } catch (error) {
    console.log("Error in updating the category.", error.message);
    res.send({ error: "Something went wrong" });
    throw error;
  }
};

export default createCategory;
