import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import { Header } from "./components/Layout";
import Meals from "./components/Meals/Meals";
import { CartProvider } from "./contexts/cartContext";

function App() {
  const [showCard, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart(true);
  };

  const onHideCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCard && <Cart onHideCart={onHideCart} />}
      <Header onShowCart={onShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
