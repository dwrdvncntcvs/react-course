import React from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <NavLink to={`/products/p1`}>Book</NavLink>
        </li>
        <li>
          <NavLink to={`/products/p2`}>Carpet</NavLink>
        </li>
        <li>
          <NavLink to={`/products/p3`}>Online Course</NavLink>
        </li>
      </ul>
    </div>
  );
}
