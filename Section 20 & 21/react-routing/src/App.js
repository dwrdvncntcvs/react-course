import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainHeader } from "./components";
import { Home, ProductDetails, Products } from "./pages";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="new-user" element={<p>Hello?</p>} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
