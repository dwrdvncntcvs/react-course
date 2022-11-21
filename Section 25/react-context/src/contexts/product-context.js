import { createContext, useState } from "react";

const initialState = {
  products: [],
  toggleFavorite: (id) => {},
};

const ProductContext = createContext(initialState);

const ProductProvider = ({ children }) => {
  const [productState, setProductState] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProductState((products) => {
      const prodIndex = products.findIndex((p) => p.id === id);
      const newFavStatus = !products[prodIndex].isFavorite;
      const updatedProducts = [...products];
      updatedProducts[prodIndex] = {
        ...products[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products: productState, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
