import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ProductList from "./pages/ProductList/ProductList";
import SubProductList from "./pages/ProductList/SubProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cart from "./pages/Cart/Cart";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";

const Router = () => (
  <BrowserRouter>
    <HeaderNav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/category/:category/subcategory/:subcategory/sortMethod=1"
        element={<SubProductList />}
      />
      <Route path="/category/:category" element={<ProductList />} />
      <Route
        path="/category/:category/product/:product"
        element={<ProductDetail />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
