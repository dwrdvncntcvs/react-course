import React from "react";

import ProductItem from "../components/Products/ProductItem";
// import { useProducts } from "../hooks/productsHooks";
import { useStore } from "../hooks/store";
import "./Products.css";

const Products = (props) => {
  const [state] = useStore();

  // const { products: productList } = useProducts();
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
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
