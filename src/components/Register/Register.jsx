import React, { useState } from "react";
import "./Register.css";
// import sendEmail from "../../Controller/sendEmail.js";
import { validEmail } from "../regex.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
  };

  return (
    <div>
      <div className="register">
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
        <div className="py-[60px] bg-white ">
          <p className="text-6xl text-slate-200 font-thin mb-3 text-center">
            #my account
          </p>
          <p className="text-3xl font-bold text-center">Tạo tài khoản</p>
          <div className="w-[560px] p-[20px] m-auto mt-14 text-left">
            <div className="flex">
              <p className="font-thin">Địa chỉ email đăng ký mới</p>{" "}
              <span className="inline text-[red]">*</span>
            </div>
            <input
              type="email"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              name=""
              id=""
              className="outline-none border w-full my-2 px-2 py-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            {emailErr && <p className="text-red-600">Email is not valid</p>}
            <p className="font-thin mt-3">
              A link to set a new password will be sent to your email address.
            </p>
            <button
              type="button"
              className="h-full w-[150px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10"
              onClick={validate}
            >
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
