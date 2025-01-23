import axios, { AxiosInstance } from "axios";

// export const api: AxiosInstance = axios.create({
//   baseURL: `http://localhost:3001`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const api: AxiosInstance = axios.create({
  baseURL: `https://brazilian-api.onrender.com`,
  headers: {
    "Content-Type": "application/json",
  },
});
