import axios from "axios";

export const request = axios.create({
  baseURL: "https://fakestoreapi.com",
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error;
  }
);
