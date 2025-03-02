import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Navbar from "./components/layouts/Navbar";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}
