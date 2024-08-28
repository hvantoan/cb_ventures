import { getItem } from "@/utils/localStorageControl";
import axios from "axios";

export const API_ENDPOINT = `${process.env.API_ENDPOINT}/api`;

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosNotToken = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosUpload = axios.create({ baseURL: API_ENDPOINT });

axiosUpload.interceptors.request.use(async (config: any) => {
  //1. convert JSON to Object, then get value by key token
  const token = getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.request.use(async (config) => {
  //1. convert JSON to Object, then get value by key token
  const token = getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // console.log(response.data);
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);

axiosNotToken.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // console.log(response.data);
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);

export default axiosClient;
