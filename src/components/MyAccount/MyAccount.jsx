import React from "react";
import { Sidebar } from "flowbite-react";
import { IoLocation } from "react-icons/io5";
import { BiSolidCoupon } from "react-icons/bi";
import { HiArrowSmLeft, HiUser, HiViewBoards } from "react-icons/hi";

import { FaTachometerAlt } from "react-icons/fa";
import "./MyAccount.css";

export default function MyAccount() {
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
        <div className="my-account gap-x-[30px] my-[40px]">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={FaTachometerAlt}>
                  Trang tài khoản
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards} labelColor="dark">
                  Đơn hàng
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiSolidCoupon}>
                  Mã giảm giá
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={IoLocation}>
                  Địa chỉ
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                  Thông tin tài khoản
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmLeft}>
                  Đăng xuất
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <div className="bg-black"></div>
        </div>
      </div>
    </div>
  );
}
