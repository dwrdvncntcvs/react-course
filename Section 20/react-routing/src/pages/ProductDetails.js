import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.id}</p>
    </div>
  );
}
