import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { setNotification, useUIState } from "./store/uiSlice";
import { BASE_URL } from "./variable";

let isInitial = true;

function App() {
  const { cartIsVisible, notification } = useUIState();
  const { cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        setNotification({
          title: "Sending",
          message: "Sending cart data",
          status: "pending",
        })
      );
      const response = await fetch(`${BASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) throw new Error("Sending cart data failed");

      dispatch(
        setNotification({
          title: "Success",
          message: "Cart data sent successfully",
          status: "success",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendData().catch((err) => {
      dispatch(
        setNotification({
          title: "Error!",
          message: "Sending cart data failed",
          status: "error",
        })
      );
    });
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
