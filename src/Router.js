import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
// import ProductList from "./pages/ProductList/ProductList";
import SubProductList from "./pages/ProductList/SubProductList";
import IndexProductDetail from "./pages/ProductDetail/IndexProductDetail";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import SignUp from "./pages/SignUp/SignUp";
import IndexSignUp from "./pages/SignUp/IndexSignUp";
//import SignIn from "./pages/SignIn/SignIn";
//import Cart from "./pages/Cart/Cart";
import IndexCart from "./pages/Cart/IndexCart";
import IndexProductList from "./pages/ProductList/IndexProductList";
import IndexSignIn from "./pages/SignIn/IndexSignIn";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/category/:category/subcategory/:subcategory/sortMethod=1"
        element={<SubProductList />}
      />
      <Route path="/category/:category" element={<IndexProductList />} />
      <Route
        path="/category/:category/product/:product"
        element={<IndexProductDetail />}
      />
      <Route path="/signup" element={<IndexSignUp />} />
      <Route path="/signin" element={<IndexSignIn />} />
      <Route path="/cart" element={<IndexCart />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
