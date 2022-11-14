import React from "react";
import { Outlet } from "react-router-dom";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}
