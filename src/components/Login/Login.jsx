import React, { useState } from "react";
import axios from "../../config/configAxios";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./Login.css";
import { validEmail, validPassword } from "../regex.js";

export default function Login() {
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const handleLogin = async () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }

    const response = await axios.post("/auth/login", { email, password });
    console.log(response.data);
    if (response.data.success) {
      navigate("/");
      localStorage.setItem("id", response.data.role_id);
    } else {
      setMessage(response.data.message);
    }
  };

  return (
    <div>
      <div className="breadcrumb bg-[#f4f9fc] h-[110px] py-5 ">
        <div className="flex items-center justify-center">
          <a href="/" className="px-1">
            Trang Chủ
          </a>{" "}
          / <p className="font-medium px-1"> Tài khoản của tôi</p>
        </div>
        <div className="text-3xl font-bold text-center">Tài khoản của tôi</div>
      </div>
      <div className="py-[60px] bg-white ">
        <p className="text-6xl text-slate-200 font-thin mb-3 text-center">
          #my account
        </p>
        <p className="text-3xl font-bold text-center">Đăng nhập vào hệ thống</p>
        <div className="w-[560px] p-[20px] m-auto mt-14 text-left relative">
          <div className="flex">
            <p className="font-thin">
              Tên hoặc địa chỉ email đã đăng ký của bạn
            </p>
            <span className="inline text-[red]">*</span>
          </div>
          <input
            type="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
            className="outline-none border w-full my-2 px-2 py-2 focus:shadow"
          />
          <div className="flex">
            <p className="font-thin">Mật khẩu</p>{" "}
            <span className="inline text-[red]">*</span>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
            autoComplete="off"
            className="outline-none border w-full my-2 px-2 py-2 focus:shadow"
          />

          <label
            htmlFor="check"
            className="absolute top-[150px] right-[30px] hover:text-orange-500 duration-200"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </label>
          <input
            id="check"
            type="checkbox"
            className="hidden"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />

          <input
            type="checkbox"
            name=""
            id="save-account"
            className="focus:border-none focus:ring-0"
          />
          <label
            htmlFor="save-account"
            className="text-black font-thin ml-1 focus:outline-0"
          >
            Lưu tài khoản trên thiết bị này
          </label>

          <Link to="/recover-password">
            <p className="text-orange-500 font-thin mt-8">Quên mật khẩu?</p>
          </Link>
          <Link to="/register">
            <p className="text-orange-500 font-thin">Tạo tài khoản mới</p>
          </Link>
          <button
            type="button"
            className="h-full w-[150px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10"
            onClick={handleLogin}
          >
            Đăng Nhập
          </button>
          {emailErr && (
            <p className="ont-thin text-red-600">Your email is invalid</p>
          )}
          {pwdError && (
            <p className="ont-thin text-red-600">Your password is invalid</p>
          )}
          {message !== "" && (
            <p className="font-thin text-red-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
