import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { IoLocation } from "react-icons/io5";
import { BiSolidCoupon } from "react-icons/bi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { HiArrowSmLeft, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";

import { FaTachometerAlt } from "react-icons/fa";
import "./MyAccount.css";

export default function MyAccount() {
  const [account, setAccount] = useState(true);
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState(false);
  const [infoAccount, setInfoAccount] = useState(false);

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
      <div className="w-[1170px] m-auto">
        <div className="my-account flex gap-x-[50px] my-[40px]">
          <Sidebar
            aria-label="Default sidebar example"
            className="max-h-[320px]"
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  icon={FaTachometerAlt}
                  onClick={() => {
                    setAccount(true);
                    setOrder(false);
                    setAddress(false);
                    setInfoAccount(false);
                  }}
                >
                  Trang tài khoản
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiViewBoards}
                  labelColor="dark"
                  onClick={() => {
                    setOrder(true);
                    setAccount(false);
                    setAddress(false);
                    setInfoAccount(false);
                  }}
                >
                  Đơn hàng
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiSolidCoupon}>
                  Mã giảm giá
                </Sidebar.Item>
                <Sidebar.Item
                  icon={IoLocation}
                  onClick={() => {
                    setOrder(false);
                    setAccount(false);
                    setAddress(true);
                    setInfoAccount(false);
                  }}
                >
                  Địa chỉ
                </Sidebar.Item>
                <Sidebar.Item
                  icon={HiUser}
                  onClick={() => {
                    setOrder(false);
                    setAccount(false);
                    setAddress(false);
                    setInfoAccount(true);
                  }}
                >
                  Tài khoản
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                  Đăng xuất
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <div className="right ml-10">
            {account && (
              <div>
                <p>
                  Xin chào <strong>admin</strong> (không phải tài khoản{" "}
                  <strong>admin</strong>? Hãy thoát ra và đăng nhập vào tài
                  khoản của bạn)
                </p>
                <p className="mt-3">
                  Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản
                  lý địa chỉ giao hàng và thanh toán, và sửa mật khẩu và thông
                  tin tài khoản.
                </p>
              </div>
            )}

            {order && (
              <div className="pt-10">
                <p className="text-4xl font-extrabold">Orders</p>
                <div className="flex justify-between items-center border-t-[#fd6e4f] border-t-4 w-full h-[70px] mt-2 bg-[#f7f6f7] p-3">
                  <div className="flex items-center">
                    <IoCheckmarkCircle className="fill-[#fd6e4f]" />
                    <p className="font-thin text-base text-slate-500 ml-2">
                      Bạn chưa có đơn hàng nào.
                    </p>
                  </div>
                  <Link
                    to="/productS"
                    className="h-full w-[200px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10 text-center"
                  >
                    Đến trang sản phẩm
                  </Link>
                </div>
              </div>
            )}

            {address && (
              <div className="pt-10">
                <p className="text-3xl font-bold">My Address</p>
                <p className="font-thin text-base text-slate-500">
                  {" "}
                  Địa chỉ này sẽ được làm địa chỉ mặc định để nhận hàng
                </p>
                <Link
                  to="/my-account/edit-address"
                  className="flex items-center hover:cursor-pointer mt-2"
                >
                  <CiEdit className="fill-[#fd6e4f] " />
                  <p className="text-[#fd6e4f] ml-2">Edit</p>
                </Link>

                <p className="mt-[30px]">
                  Tên người nhận: <strong>Lê Văn Trung</strong>
                </p>
                <p>
                  Số điện thoại: <strong>0567891000</strong>
                </p>
                <p>số 34, đường An Dương Vương, Phường 16, Quận 8, TP.HCM</p>
              </div>
            )}

            {infoAccount && (
              <div className="">
                <div className="flex justify-between items-center">
                  <div className="w-[48%]">
                    <div className="flex mb-1">
                      <label className="font-semibold " htmlFor="first-name">
                        First Name
                      </label>{" "}
                      <span className="inline text-[red]">*</span>
                    </div>
                    <div className="flex gap-x-1 h-[40px] items-center">
                      <input
                        type="text"
                        name=""
                        id="first-name"
                        className="outline-none border w-full my-2 px-2 py-2"
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="flex mb-1">
                      <label className="font-semibold " htmlFor="last-name">
                        Last Name
                      </label>{" "}
                      <span className="inline text-[red]">*</span>
                    </div>
                    <div className="flex gap-x-7 h-[40px] items-center">
                      <input
                        type="text"
                        name=""
                        id="last-name"
                        className="outline-none border w-[100%] my-2 px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <div className="flex mb-1">
                    <label className="font-semibold " htmlFor="first-name">
                      Display Name
                    </label>{" "}
                    <span className="inline text-[red]">*</span>
                  </div>
                  <div className="flex gap-x-1 h-[40px] items-center">
                    <input
                      type="text"
                      name=""
                      id="first-name"
                      className="outline-none border w-full my-2 px-2 py-2"
                    />
                  </div>
                </div>
                <p className="text-base text-slate-500 font-thin mt-2">
                  Tên này sẽ hiển thị ở trang cá nhân và phần đánh giá sản phẩm
                </p>
                <div className="h-[1px] w-full bg-slate-600 mt-10"></div>
                <div>
                  <p className="text-2xl font-bold mt-3">Password Change</p>
                  <div className="w-full mt-8">
                    <div className="flex mb-1">
                      <label className="font-medium" htmlFor="current-pass">
                        Mật khẩu hiện tại
                      </label>{" "}
                    </div>
                    <div className="flex gap-x-1 h-[40px] items-center">
                      <input
                        type="password"
                        name=""
                        id="current-pass"
                        className="outline-none border w-full my-2 px-2 py-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="flex mb-1">
                      <label className="font-medium" htmlFor="new-pass">
                        Mật khẩu mới
                      </label>{" "}
                    </div>
                    <div className="flex gap-x-1 h-[40px] items-center">
                      <input
                        type="password"
                        name=""
                        id="new-pass"
                        className="outline-none border w-full my-2 px-2 py-2"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-8">
                    <div className="flex mb-1">
                      <label className="font-medium" htmlFor="repeat-pass">
                        Nhập lại mật khẩu mới
                      </label>{" "}
                    </div>
                    <div className="flex gap-x-1 h-[40px] items-center">
                      <input
                        type="password"
                        name=""
                        id="repeat-pass"
                        className="outline-none border w-full my-2 px-2 py-2"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="h-full w-[150px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 my-10"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
