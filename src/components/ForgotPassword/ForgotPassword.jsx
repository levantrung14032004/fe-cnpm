import React from "react";

export default function ForgotPassword() {
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
              type="text"
              name=""
              id=""
              autoComplete="off"
              placeholder="Nhập tên đăng nhập hoặc email"
              className="w-4/5 outline-none focus:shadow px-2 py-3 border mt-1 font-medium text-slate-900"
            />
            <button
              type="button"
              className="h-full w-[200px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10 block"
            >
              Lấy Lại Mật Khẩu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
