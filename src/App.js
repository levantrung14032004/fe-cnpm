import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import store from "./store.js";
import Cart from "./components/cart/Cart.jsx";
import Register from "./components/Register/Register.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import Login from "./components/Login/Login.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import ContentProduct from "./components/ContentProduct/ContentProduct.jsx";
import Mainpage from "./components/Mainpage/Mainpage.jsx";
import Layout from "./components/Layout/Layout.js";
import Products from "./components/Products/Products.jsx";
import Payment from "./components/Checkout/Checkout.jsx";
import SearchProduct from "./components/SearchProduct/SearchProduct.jsx";
// import newProduct from "./components/newProduct.jsx";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Mainpage />
              </Layout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          ></Route>

          <Route
            path="/products"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          ></Route>
          <Route
            path="/product/:productId"
            element={
              <Layout>
                <ContentProduct />
              </Layout>
            }
          ></Route>
          <Route
            path="/search/:valueSearch"
            element={
              <Layout>
                <SearchProduct />
              </Layout>
            }
          ></Route>
          <Route
            path="/my-account"
            element={
              <Layout>
                <MyAccount />
              </Layout>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <Layout>
                <Payment />
              </Layout>
            }
          ></Route>
          <Route
            path="/new-product"
            element={
              <Layout>
                <newProduct />
              </Layout>
            }
          ></Route>
          <Route
            path="/recover-password"
            element={
              <Layout>
                <ForgotPassword />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
