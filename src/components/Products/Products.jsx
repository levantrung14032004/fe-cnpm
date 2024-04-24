import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { CgMenuGridR } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";

import { Breadcrumb } from "flowbite-react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost/WriteResfulAPIPHP/api/product/read.php"
        );
        setAllProducts(response.data);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    fetchData();
  }, []);

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const renderProduct = (pageNumber, itemsPerPage) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = allProducts.slice(startIndex, endIndex);
    return pageData;
  };

  const productsInCurrentPage = renderProduct(currentPage, itemsPerPage);

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
                Hiển thị {(currentPage - 1) * itemsPerPage + 1}-
                {(currentPage - 1) * itemsPerPage + 1 + itemsPerPage >
                allProducts.length + 1
                  ? allProducts.length + 1
                  : (currentPage - 1) * itemsPerPage + 1 + itemsPerPage}{" "}
                của {allProducts.length + 1} kết quả
              </p>
            </div>
            <div className="h-[40px]">
              <select className="focus:ring-0 rounded-sm">
                <option value="0">Thứ tự mặc định:</option>
                <option value="1">Mới nhất</option>
                <option value="2">Theo giá: từ thấp đến cao</option>
                <option value="3">Theo giá: từ cao xuống thấp</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-6 mt-[60px]">
            {productsInCurrentPage.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={index}
                className="h-[490px] product-item relative duration-1000 hover:cursor-pointer hover:shadow-md"
              >
                <div className="h-[350px] object-cover">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="name duration-100">
                  <p className="mt-[40px] font-normal w-full mb-5">
                    {product.title}
                  </p>
                  <span className="font-medium my-4">{product.price}</span>
                </div>
                <Link to="/cart">
                  <button
                    type="button"
                    className={`h-[40px] w-11/12 m-auto bg-orange-500 text-white p-2 font-bold
                  hover:bg-slate-900 duration-200 items-center justify-center absolute top-[80%] left-3
                  `}
                  >
                    <FaCartPlus className=" w-5 h-10 px-1" />
                    THÊM VÀO GIỎ HÀNG
                  </button>
                </Link>
              </Link>
            ))}
          </div>
          <div className="flex overflow-x-auto sm:justify-center mt-[30px]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </div>
      </div>
    </div>
  );
}
