import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const BASE_URL = "http://192.168.29.102:1340";
const TIME_OUT = 30000;
const TODO_TOKEN_NAME = "todo_user_token";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log("Error while saving the token", error);
    throw error;
  }
};

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync(TODO_TOKEN_NAME);
    req.headers.Authorization = access_token;
    return req;
  } catch (error) {
    return req;
  }
});

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
