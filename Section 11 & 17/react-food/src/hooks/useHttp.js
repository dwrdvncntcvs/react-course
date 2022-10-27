import { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = useCallback(async (url, opts, setter) => {
    setLoading(true);
    const response = await fetch(url, { ...opts });

    if (!response.ok) {
      if (response.status === 404) {
        setError("Failed to load meals...");
        setLoading(false);
      }
      return;
    }

    const responseData = await response.json();

    if (setter !== undefined) setter(responseData);

    setLoading(false);

    return response;
  }, []);

  return { request, loading, error };
};

export default useHttp;
