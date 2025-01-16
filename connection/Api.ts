import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("teste =", process.env.NEXT_PUBLIC_DATABASE_URL);
