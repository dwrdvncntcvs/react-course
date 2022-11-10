import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartSlice";
import { useUIState } from "./store/uiSlice";

let isInitial = true;

function App() {
  const { cartIsVisible, notification } = useUIState();
  const { cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          status={notification.status}
          title={notification.title}
        />
      )}
      <Layout>
        {}
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
