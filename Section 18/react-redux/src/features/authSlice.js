import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return { ...state, isAuth: true };
    },
    signOut: (state, action) => {
      return { ...state, isAuth: false };
    },
  },
});

export default authSlice.reducer;

export const { signIn, signOut } = authSlice.actions;

export const useAuthState = () => useSelector((state) => state.authState);
