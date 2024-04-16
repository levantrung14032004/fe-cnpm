import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <div className="breadcrumb bg-[#f4f9fc] h-[110px] py-5 ">
        <div className="flex items-center justify-center">
          <Link to="/" className="px-1">
            Trang Chủ
          </Link>{" "}
          /{" "}
          <Link to="#" className="font-medium px-1">
            {" "}
            Thanh toán
          </Link>
        </div>
        <div className="text-3xl font-bold text-center">Thanh toán</div>
      </div>
      <div className="w-[1170px] m-auto">
        <div className="payment">
          <div></div>
          <div className="grid grid-cols-2 gap-x-[30px]">
            <div className="location border p-6">
              <p className="font-bold text-lg">THÔNG TIN GIAO HÀNG</p>
              <p className="text-base font-light text-slate-500 ">
                Vui lòng nhập thông tin của bạn vào bên dưới để tiếp tục thanh
                toán
              </p>
              <div className="flex gap-x-10">
                <div>
                  <label htmlFor="name">Tên </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Nhập tên"
                    className="h-[30px] border-slate-400 focus:ring-0 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="">Họ</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Nhập họ"
                    className="h-[30px] border-slate-400 focus:ring-0 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="method-payment border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
