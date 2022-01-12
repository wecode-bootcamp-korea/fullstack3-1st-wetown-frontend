import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main/Main";
import ProductList from "./pages/ProductList/ProductList";
import SubProductList from "./pages/ProductList/SubProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cart from "./pages/Cart/Cart";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";
import CircleButton from "./components/CircleButton/CircleButton";

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
                textAlign: "center",
                fontSize: "2rem",
                padding: "250px 0",
              }}
            >
              <div>죄송합니다. 유효하지 않은 요청입니다!</div>
              <div>접근하고자하는 페이지가 없습니다.</div>

              <Link to="/">
                <CircleButton
                  type="button"
                  value="홈으로"
                  style={{
                    marginTop: "25px",
                    width: "200px",
                    height: "50px",
                    borderRadius: "50px",
                    backgroundColor: "#3d435f",
                    color: "#f2f2f2",
                  }}
                />
              </Link>
            </div>
          </main>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
