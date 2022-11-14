import React from "react";
import MainNavigation from "./MainNavigation";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={style.main}>{children}</main>
    </>
  );
};

export default Layout;
