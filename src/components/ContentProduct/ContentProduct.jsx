import React, { useState, useEffect } from "react";
import { Carousel, Breadcrumb } from "flowbite-react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { fetchHooks } from "../../Hooks/fetchCustom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../Slice/cartSlice";
import "./ContentProduct.css";

export default function ContentProduct() {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
  let { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getData(productId) {
      try {
        const response = await fetchHooks.fetchOneProduct(productId);
        setCurrentProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData(productId);
  }, [productId]);

  return (
    <div>
      <div className="content pb-[120px]">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-[#f4f9fc] h-[60px]  items-centerpx-5 py-3 dark:bg-gray-800 flex items-center justify-center"
        >
          <div className="w-[1170px] m-auto flex">
            <Breadcrumb.Item href="/" icon={HiHome}>
              Trang Chủ
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Sản phẩm </Breadcrumb.Item>
            <Breadcrumb.Item>
              {currentProduct.length > 0 ? currentProduct[0].title : null}
            </Breadcrumb.Item>
          </div>
        </Breadcrumb>
        <div className="body-content flex gap-10  w-[1170px] m-auto py-[40px] px-[20px]">
          <div className="left w-[510px] h-[650px]">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
              <Carousel className="">
                {currentProduct.length > 0
                  ? currentProduct[0].gallery_images.map((image) => (
                      <img
                        src={image}
                        alt="..."
                        className="w-[510px] object-cover"
                      />
                    ))
                  : null}
              </Carousel>
            </div>
          </div>
          <div className="right w-[630px] text-left">
            <p className="name text-3xl font-medium">
              {currentProduct.length > 0 ? currentProduct[0].title : null}
            </p>
            <p className="price py-4 font-bold text-l">
              {currentProduct.length > 0 ? currentProduct[0].price : null}₫
            </p>
            <p className="quote italic text-thin text-sm tracking-widest ">
              {currentProduct.length > 0 ? currentProduct[0].description : null}
            </p>
            <div className="flex py-[40px] gap-5">
              <div className="product-quantity border-slate-300 flex border justify-center items-center py-1 px-1">
                <div className="decrease p-1">
                  <IoIosArrowBack />
                </div>
                <div className="quantity px-3">{quantity}</div>
                <div
                  className="increase p-1"
                  onClick={(quantity) => quantity + 1}
                >
                  <IoIosArrowForward />
                </div>
              </div>
              <div
                className="flex items-center px-8 py-3 bg-orange-500 text-white gap-2 cursor-pointer  hover:bg-slate-900 duration-200"
                onClick={() => {
                  if (currentProduct.length > 0) {
                    dispatch(
                      addProduct({
                        id: currentProduct[0].id,
                        name: currentProduct[0].title,
                        price: currentProduct[0].price,
                        quantity: quantity,
                        total: currentProduct[0].price * quantity,
                        thumbnail: currentProduct[0].thumbnail,
                      })
                    );
                  }
                }}
              >
                <FaCartShopping /> <p>Thêm vào giỏ hàng</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div className="py-[50px]">
              <div className="font-bold text-medium py-1">
                Đơn vị: <span className="font-normal">VNĐ</span>
              </div>
              <div className="font-bold text-medium  py-1">
                Mã: <span className="font-normal">vnk-noan</span>
              </div>
              <div className="font-bold text-medium  py-1">
                Danh Mục: {/*  */}
                <span className="font-normal">{}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-slate-300 my-10 w-[1170px] m-auto"></div>
        <div className="desc w-[1170px] m-auto py-8 px-10 text-left border-slate-300 border rounded-[5px]">
          {/* Gio thieu san pham */}
          <div>
            <h1 className="font-bold text-3xl py-4">Giới thiệu</h1>
            {currentProduct.length > 0
              ? currentProduct[0].introduce
                  .split("\r\n\r\n")
                  .map((intro) => (
                    <p className="py-2 text-thin font-sm text-[#555] leading-7">
                      {intro}
                    </p>
                  ))
              : console.log(null)}
          </div>

          {/* Hinh anh mo ta */}
          <div className="grid grid-cols-3 grid-rows-2 py-5 gap-1">
            {currentProduct.length > 0
              ? currentProduct[0].gallery_images.map((image) => (
                  <img src={image} alt="..." className="inline-block" />
                ))
              : null}
          </div>
          {/* Thong tin san pham */}
          <div>
            <h1 className="font-bold text-3xl py-4">Thông tin sản phẩm</h1>
            <ul className="px-[30px] list-disc text-thin">
              {currentProduct.length > 0
                ? currentProduct[0].information
                    .split("\r\n")
                    .map((intro) => <li>{intro}</li>)
                : null}
            </ul>
          </div>
        </div>
        <div className="text-left w-[1170px] m-auto py-20">
          <h1 className="font-medium text-md">SẢN PHẨM LIÊN QUAN</h1>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-5">
            <Carousel
              onSlideChange={(index) => console.log("onSlideChange()", index)}
            >
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 1
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 2
              </div>
              <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 3
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
