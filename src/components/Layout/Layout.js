import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { check_status } from "../../Slice/status";
import { useDispatch, useSelector } from "react-redux";
import Mainpage from "../Mainpage/Mainpage";
import Spinner from "../Spinner/Spinner";
export default function Layout({ children }) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
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
      <Header />
      <main>
        {children.type.name === "Login" && status.error === 0 ? (
          <Mainpage />
        ) : (
          children
        )}
      </main>
      <Footer />
    </div>
  );
}
