import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { validEmail } from "../regex.js";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassWord, setRepeatPassWord] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [haveCode, setHaveCode] = useState(false);
  const [code, setCode] = useState("");
  const [codeInEmail, setCodeInEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [flagPass, setFlagPass] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  function generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    const length = 6;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    const SERVICE_ID = "service_ya55pmw";
    const TEMPLATE_ID = "template_lxy6mxk";
    const PUBLIC_KEY = "pXtlsZO24cP_oKbtG";
    const code = generateRandomCode();
    setCodeInEmail(code);

    var data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        to_email: email,
        from_name: "Comicola",
        name_shop: "Comicola",
        message: code,
      },
    };
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      alert("Email đã được gửi, bạn vui lòng kiểm tra email để tiếp tục");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitCode = () => {
    if (code === codeInEmail.trim().toUpperCase() && code !== "") {
      localStorage.removeItem("email");
      localStorage.setItem("email", email);
      setHaveCode(true);
      setFlag(false);
      return;
    } else {
      setHaveCode(false);
    }
    setFlag(true);
  };
  const handleRegister = async () => {
    if (
      password === "" ||
      repeatPassWord === "" ||
      password !== repeatPassWord
    ) {
      setFlagPass(true);
      return;
    } else {
      setFlagPass(false);

      const response = await axios.put(
        "http://localhost/WriteResfulAPIPHP/model/register.php",
        JSON.stringify({
          email: localStorage.getItem("email"),
          password: password,
        })
      );
      if (response.data.success) {
        navigate("/login");
      } else {
        setMessage(response.data.message);
      }
    }
  };

  return (
    <div>
      <div className=" reset-password pb-10">
        <div className="breadcrumb bg-[#f4f9fc] h-[110px] py-5 ">
          <div className="flex items-center justify-center">
            <a href="/" className="px-1">
              Trang Chủ
            </a>{" "}
            / <p className="font-medium px-1"> Tài khoản của tôi</p>
          </div>
          <div className="text-3xl font-bold text-center">
            Tài khoản của tôi
          </div>
        </div>
        <div className="py-[60px] bg-white w-[1170px] m-auto">
          <div className="text-left">
            <p className="font-thin text-sm">
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <p className="font-bold text-l mt-5">Tên đăng nhập hoặc email:</p>
            <input
              type="email"
              name=""
              id=""
              autoComplete="off"
              placeholder="Nhập tên đăng nhập hoặc email"
              className="w-4/5 outline-none focus:shadow px-2 py-3 border mt-1 font-medium text-slate-900"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onSubmit={handleSubmit}
              type="button"
              className="h-full w-[200px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10 block"
            >
              Gửi Mã
            </button>
          </div>
          {emailErr && <p className="text-red-600">Email is not valid</p>}
          <div className="flex mt-10">
            <p className="font-thin">Kiểm tra mail để lấy mã</p>{" "}
            <span className="inline text-[red]">*</span>
          </div>
          <div className="flex gap-x-7 h-[40px] items-center  w-[300px]">
            <input
              type="text"
              name=""
              id=""
              className="outline-none border w-full my-2 px-2 py-2"
              placeholder="Mã xác thực"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              value={code}
            />
            <button
              type="button"
              className="h-full w-[150px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10"
              onClick={handleSubmitCode}
            >
              Xác nhận
            </button>
          </div>
          {flag && (
            <p className="font-thin text-red-700">Mã xác thực không đúng</p>
          )}
          {haveCode && (
            <div>
              <div className="flex mt-10">
                <p className="font-thin">Nhập mật khẩu</p>{" "}
                <span className="inline text-[red]">*</span>
              </div>
              <div className="flex gap-x-7 h-[40px] items-center  w-[300px]">
                <input
                  type="password"
                  name="password"
                  id=""
                  className="outline-none border w-full my-2 px-2 py-2"
                  placeholder=" Mật khẩu"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </div>
              <div className="flex mt-5">
                <p className="font-thin">Xác nhận lại mật khẩu</p>{" "}
                <span className="inline text-[red]">*</span>
              </div>
              <div className="flex gap-x-7 h-[40px] items-center  w-[300px]">
                <input
                  type="password"
                  name="repeatPassword"
                  id=""
                  className="outline-none border w-full my-2 px-2 py-2"
                  placeholder="Nhập lại mật khẩu"
                  onChange={(e) => {
                    setRepeatPassWord(e.target.value);
                  }}
                  value={repeatPassWord}
                />
              </div>
              <button
                type="button"
                className="h-full w-[150px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10"
                onClick={handleRegister}
              >
                Xác nhận
              </button>
              <p className="font-thin text-red-600">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
