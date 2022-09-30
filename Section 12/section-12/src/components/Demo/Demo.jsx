import React from "react";
import { memo } from "react";

const Demo = ({ show = false }) => {
  console.log("Demo Running");

  return <p>{show ? "This is a new Paragraph!" : ""}</p>;
};

export default memo(Demo);
