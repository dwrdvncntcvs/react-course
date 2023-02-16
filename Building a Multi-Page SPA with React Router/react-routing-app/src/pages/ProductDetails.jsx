import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id: productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetails;
