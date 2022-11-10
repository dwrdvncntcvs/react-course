import { BASE_URL } from "../variable";
import { replaceCart } from "./cartSlice";
import { setNotification } from "./uiSlice";

export const getCartData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(`${BASE_URL}/cart.json`);

    if (!response.ok) throw new Error("Could not fetch cart data");

    const data = await response.json();

    return data;
  };

  try {
    const cartData = await fetchData();

    dispatch(
      replaceCart({
        totalQuantity: cartData.totalQuantity,
        cartItems: cartData.cartItems,
      })
    );
  } catch (e) {
    dispatch(
      setNotification({
        title: "Error!",
        message: "Retrieving cart data failed",
        status: "error",
      })
    );
  }
};

export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      setNotification({
        title: "Sending",
        message: "Sending cart data",
        status: "pending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) throw new Error("Sending cart data failed");
    };

    try {
      await sendRequest();

      dispatch(
        setNotification({
          title: "Success",
          message: "Cart data sent successfully",
          status: "success",
        })
      );
    } catch (e) {
      dispatch(
        setNotification({
          title: "Error!",
          message: "Sending cart data failed",
          status: "error",
        })
      );
    }
  };
};
