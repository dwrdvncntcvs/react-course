import React from "react";
// import { useStore } from "react-redux";
// import { useProducts } from "../../hooks/productsHooks";
import { useStore } from "../../hooks/store";

import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const dispatch = useStore()[1];
  // const { toggleFavorite } = useProducts();

  const toggleFavHandler = () => {
    // toggleFavorite(props.id);
    dispatch("toggleFavorite", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
