import { api } from "@/connection/Api";
import { useState } from "react";

export const usePost = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postData = async (body: T) => {
    try {
      const response = await api.post<T>(endpoint, body);
      console.log("hook", response);
      console.log("hook data", response.data);
      setData(response.data);
      setLoading(false);

      return response.data;
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};
