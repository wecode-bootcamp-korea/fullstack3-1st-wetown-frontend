import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import ProductList from "./pages/productList/productList";
import ProductDetail from "./pages/productDetail/productDetail";
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category/:category" element={<ProductList />} />
      <Route
        path="/category/:category/product/:product"
        element={<ProductDetail />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
