import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/collection" element={<Collection></Collection>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/product/productId" element={<Product></Product>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/place-order" element={<PlaceOrder></PlaceOrder>} />
        <Route path="/orders" element={<Order></Order>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
