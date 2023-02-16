import React from "react";
import { Link } from "react-router-dom";

const PRODUCT_LIST = [
  { id: "product-1", name: "Product 1" },
  { id: "product-2", name: "Product 2" },
  { id: "product-3", name: "Product 3" },
];

const Product = () => {
  return (
    <div>
      <h1>Product Lists</h1>
      <ul>
        {PRODUCT_LIST.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
