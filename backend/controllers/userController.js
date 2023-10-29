import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const getUserToken = (_id) => {
  const authToken = jwt.sign({ _id }, "express", { expiresIn: "7d" });
  return authToken;
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log("Error Creating the User.", error.message);
    throw error;
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(409).send("User doesn't exist");
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).send("Invalid Credentials");
      } else {
        const token = getUserToken(existingUser._id);
        return res.send({
          token,
          user: {
            name: existingUser.name,
            email: existingUser.email,
          },
        });
      }
    }
  } catch (error) {
    console.log("Error Logging in the User.", error.message);
    throw error;
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const existingUser = await User.findOne({ _id: id });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) return res.status(400).send("Incorrect Password");
    else await User.deleteOne({ _id: id });
    res.send({ message: "Your account has been deleted successfully" });
  } catch (error) {
    console.log("Error in deleting the User.", error.message);
    res.send({ error: "Error while deleting the account the user" });
    throw error;
  }
};

export default registerUser;
