import { Route, Routes } from "react-router-dom";
import ProductSingle from "../ProductSingle/ProductSingle.jsx";
import ProductsPage from "./ProductsPage.jsx";
import { Cart, Checkout } from "../index.js";

function ProductRoutes() {
  return (
    <Routes>
      <Route index element={<ProductsPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path=":id" element={<ProductSingle />} />
    </Routes>
  );
}

export default ProductRoutes;
