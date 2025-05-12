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
function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Navigate to="/pages/login" replace/>} />
        
        <Route path="/pages/login" element={<Login />} />
        
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/home" />
          <Route path="/home" element={<Home />} />
          <Route path="/shop/product-details" element={<ProductDetails />}/>

          <Route path="contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>


        <Route element={<PrivateRoot />}>
          <Route element={<AdminLayout />} path="/admin">
            <Route index element={<AdminHome />} />  {/* Admin səhifəsini buraya əlavə edirik */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
