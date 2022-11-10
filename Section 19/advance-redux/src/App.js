import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { getCartData, sendCartData } from "./store/cartActions";
import { useUIState } from "./store/uiSlice";

function App() {
  const { cartIsVisible, notification } = useUIState();
  const { cartItems, totalQuantity, changed } = useSelector(
    (state) => state.cartState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (changed) dispatch(sendCartData({ cartItems, totalQuantity }));
  }, [cartItems, totalQuantity, dispatch, changed]);

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
