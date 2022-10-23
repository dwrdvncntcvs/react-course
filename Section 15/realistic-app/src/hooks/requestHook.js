import { useCallback, useState } from "react";

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataRequest = useCallback(async (url, requestConfig, setData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { ...requestConfig });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      setData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, dataRequest };
};
