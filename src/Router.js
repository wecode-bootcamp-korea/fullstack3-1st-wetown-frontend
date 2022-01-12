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
      <Route
        path="*"
        element={
          <main
            style={{
              width: "100%",
              minWidth: "1200px",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              style={{
                position: "absolute",
                textAlign: "center",
                fontSize: "10rem",
                padding: "250px 0",
              }}
            >
              thisiswetown!
            </div>
          </main>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
