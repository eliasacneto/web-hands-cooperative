import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.DATABASE_URL,
  console.log("teste =", process.env.DATABASE_URL);
  headers: {
    "Content-Type": "application/json",
  },
});


