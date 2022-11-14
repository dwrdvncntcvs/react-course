import React from "react";
import { useParams, Outlet } from "react-router-dom";

export default function QuoteDetails() {
  const { quoteId } = useParams();

  return (
    <div>
      <h1>QuoteDetails</h1>
      <p>{quoteId}</p>
      <Outlet />
    </div>
  );
}
