import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>This is the Home Page</p>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </div>
  );
};

export default Home;
