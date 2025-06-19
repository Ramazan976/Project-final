import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./user/layout/layout";
import Home from "./user/pages/home";
import AdminLayout from "./admin/layout/layout";
import AdminHome from "./admin/pages/AdminHome";
import PrivateRoot from "./provider/privateRoot"; 
import Contact from "./user/pages/contact";
import ProductDetails from "./user/pages/product-details";
import CartPage from "./user/components/CartPage";
import Login from "./admin/pages/login";
import ProductCheckout from "./user/pages/product-checkout";
import ProductSearch from "./admin/pages/productSearch";
import AddProduct from "./admin/pages/AddProduct";

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        {/* Ana yönləndirmə */}
        <Route path="/" element={<Navigate to="/pages/login" replace />} />
        
        {/* Login səhifəsi */}
        <Route path="/pages/login" element={<Login />} />

        {/* Admin qorunan yollar */}
        <Route element={<PrivateRoot allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="productSearch" element={<ProductSearch />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        </Route>

        {/* İstifadəçi yolları */}
        <Route element={<PrivateRoot allowedRole="user" />}>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="shop/product-details" element={<ProductDetails />} />
          <Route path="shop/product-checkout" element={<ProductCheckout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
