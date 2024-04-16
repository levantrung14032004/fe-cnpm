import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { CgMenuGridR } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import ImageProduct from "../../Images/Img_Product/TEMPLATE_1.jpg";

import { Breadcrumb } from "flowbite-react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <div className="products pb-[120px]">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-[#f4f9fc] h-[60px] items-centerpx-5 py-3 dark:bg-gray-800"
        >
          <div className="w-[1170px] m-auto">
            <div className="flex justify-center items-center">
              <Breadcrumb.Item href="/">Trang Chủ</Breadcrumb.Item>
              <Breadcrumb.Item href="/products">Sản phẩm </Breadcrumb.Item>
            </div>
          </div>
        </Breadcrumb>
        <div className="preview w-[1170px] m-auto mt-10">
          <div className="fillter flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <div>
                <CgMenuGridR className="w-[30px] h-[30px]" />
              </div>
              <p className="font-medium text-medium">
                Hiển thị 1–28 của 119 kết quả
              </p>
            </div>
            <div className="h-[40px]">
              <select className="focus:ring-0 rounded-sm">
                <option value="0">Thứ tự mặc định:</option>
                <option value="1">Theo độ phổ biến</option>
                <option value="2">Mới nhất</option>
                <option value="3">Theo giá: từ thấp đến cao</option>
                <option value="4">Theo giá: từ cao xuống thấp</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-6 mt-[60px]">
            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Product item */}
            <div className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md">
              <div className="h-[350px] object-cover">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="name duration-100">
                <p className="mt-[40px] font-normal w-full mb-5">
                  Truyện Ma Sau 6 Giờ – Tập 2 (Tái bản)
                </p>
                <span className="font-medium my-4">145,000₫ – 350,000₫</span>
              </div>
              <button
                type="button"
                className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
              hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
               `}
              >
                <FaCartPlus className=" w-5 h-10 px-1" />
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto sm:justify-center mt-[30px]">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={10}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
