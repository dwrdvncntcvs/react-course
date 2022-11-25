import { useCallback, useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
};

const httpReducer = (state, { type, payload }) => {
  switch (type) {
    case "PENDING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false };
    case "REJECTED":
      return { loading: false, error: payload };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const useHttp = () => {
  const [state, dispatch] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const sendRequest = useCallback(async (url, method, body) => {
    try {
      dispatch({ type: "PENDING" });
      const response = await fetch(url, {
        method,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      dispatch({ type: "SUCCESS" });

      return data;
    } catch (err) {
      dispatch({
        type: "REJECTED",
        payload: err.message,
      });
    }
  }, []);

  return { http: state, sendRequest, clear };
};

export default useHttp;
