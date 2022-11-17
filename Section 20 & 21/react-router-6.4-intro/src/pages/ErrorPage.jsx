import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return <div>{error.message}</div>;
};

export default ErrorPage;
