import React from "react";
// import { useSelector } from 'react-redux';

import FavoriteItem from "../components/Favorites/FavoriteItem";
import { useStore } from "../hooks/store";
import "./Products.css";

const Favorites = (props) => {
  const [state] = useStore();
  const favoriteProducts = state.products.filter(
    (product) => product.isFavorite
  );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
