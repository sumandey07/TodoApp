import axiosInstance, { TODO_TOKEN_NAME, saveToken } from "./config";

export const registerUser = async ({ email, name, password }) => {
  try {
    const response = await axiosInstance.post("/users/create", {
      name,
      email,
      password,
    });
    return response.data.user;
  } catch (error) {
    console.log("error in registerUser", error);
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(TODO_TOKEN_NAME, _token);
    return response.data.user;
  } catch (error) {
    console.log("error in loginUser", error);
    throw error;
  }
};
