import React from "react";

import ProductItem from "../components/Products/ProductItem";
import { useProducts } from "../hooks/productsHooks";
import "./Products.css";

const Products = (props) => {
  const { products: productList } = useProducts();
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
