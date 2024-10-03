import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { check_status } from "../../Slice/status";
import { useDispatch, useSelector } from "react-redux";
import Mainpage from "../Mainpage/Mainpage";
import Spinner from "../Spinner/Spinner";
import { fetchAllProducts } from "../../Slice/products";
import { fetchAllCategory } from "../../Slice/categorySlice";
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const products_page = useSelector((state) => state.products.products_page);
  const category = useSelector((state) => state.category);
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategory());
    dispatch(check_status());
  }, []);
  useEffect(() => {
    if (status.error === 0) {
      setIsLogin(true);
      window.history.pushState({}, "", "/");
    } else {
      setIsLogin(false);
    }
  }, [status.error]);
  if (isLogin === null || status.loading) {
    return <Spinner />;
  }
  return (
    <div>
      {(products_page.loading || category.loading) && <Spinner />}
      <Header />
      <main>
        {children.type.name === "Login" && isLogin ? <Mainpage /> : children}
      </main>
      <Footer />
    </div>
  );
}
