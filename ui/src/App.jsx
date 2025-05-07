import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./user/layout/layout";
import Home from "./user/pages/home";
import AdminLayout from "./admin/layout/layout";
import AdminHome from "./admin/pages/AdminHome";
import PrivateRoot from "./provider/privateRoot";  // PrivateRoot-u daxil etdik
import Pages from "./user/pages/pages";
import Contact from "./user/pages/contact";
import ProductDetails from "./user/pages/product-details";
function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route path="/shop/product-details" element={<ProductDetails />}/>
          <Route path="pages" element={<Pages />} />
          <Route path="contact" element={<Contact />} />
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
