import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";
import ImageProduct from "../../Images/Img_Product/TEMPLATE_1.jpg";

export default function Checkout() {
  const [idProvince, setIdProvince] = useState(null);
  const [idDistrict, setIdDistrict] = useState(null);
  const [dataProvince, setdataProvince] = useState([]);
  const [dataDistrict, setdataDistrict] = useState([]);
  const [dataWards, setdataWards] = useState([]);

  useEffect(() => {
    axios
      .get("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => {
        setdataProvince(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(` https://esgoo.net/api-tinhthanh/2/${idProvince}.htm`)
      .then((res) => {
        setdataDistrict(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idProvince]);

  useEffect(() => {
    axios
      .get(`https://esgoo.net/api-tinhthanh/3/${idDistrict}.htm`)
      .then((res) => {
        setdataWards(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idDistrict]);

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
        <div className="checkout">
          <div></div>
          <div className="grid grid-cols-2 gap-x-[30px]">
            <div className="location border p-6  pt-[50px]">
              <p className="font-bold text-lg">THÔNG TIN GIAO HÀNG</p>
              <p className="text-base font-light text-slate-500 ">
                Vui lòng nhập thông tin của bạn vào bên dưới để tiếp tục thanh
                toán
              </p>
              <div className="flex gap-x-10 mt-5 justify-between">
                <div>
                  <div className="flex gap-x-1">
                    <label htmlFor="name ">Tên </label>
                    <span className="inline text-[red]">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Nhập tên"
                    className="h-[30px] border-slate-200 focus:ring-0 w-[230px] "
                    required
                  />
                </div>
                <div>
                  <div className="flex gap-x-1">
                    <label htmlFor="">Họ</label>
                    <span className="inline text-[red]">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Nhập họ"
                    className="h-[30px] border-slate-200 focus:ring-0 w-[230px] "
                    required
                  />
                </div>
              </div>

              <div className="flex gap-x-10 mt-7 justify-between">
                <div>
                  <div className="flex gap-x-1">
                    <label htmlFor="name">Số điện thoại</label>
                    <span className="inline text-[red]">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                    className="h-[30px] border-slate-200 focus:ring-0 w-[230px] "
                    required
                  />
                </div>
                <div>
                  <div className="flex gap-x-1">
                    <label htmlFor="email ">Địa chỉ Email</label>
                    <span className="inline text-[red]">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="Địa chỉ Email"
                    className="h-[30px] border-slate-200 focus:ring-0 w-[230px] "
                    required
                  />
                </div>
              </div>
              <div className="mt-10">
                <div className="flex justify-between gap-x-10">
                  <div>
                    <div className="flex gap-x-1">
                      <label htmlFor="city block">Chọn tỉnh thành</label>
                      <span className="inline text-[red]">*</span>
                    </div>
                    <select
                      id="city"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setIdProvince(e.target.value);
                      }}
                      className="block h-[40px] border-slate-200 focus:ring-0 w-[230px] mt-1"
                    >
                      <option value="" defaultValue>
                        Chọn tỉnh thành
                      </option>
                      {dataProvince.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex gap-x-1">
                      <label htmlFor="district">Chọn quận, huyện</label>
                      <span className="inline text-[red]">*</span>
                    </div>
                    <select
                      id="district"
                      onChange={(e) => {
                        setIdDistrict(e.target.value);
                      }}
                      className="block h-[40px] border-slate-200 focus:ring-0 w-[230px] mt-1"
                    >
                      <option value="" defaultValue>
                        Chọn quận huyện
                      </option>
                      {dataDistrict.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.full_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-between gap-x-10 mt-5">
                  <div>
                    <div className="flex gap-x-1">
                      <label htmlFor="ward">Chọn phường, xã</label>
                      <span className="inline text-[red]">*</span>
                    </div>

                    <select
                      id="ward"
                      className="block h-[40px] border-slate-200 focus:ring-0 w-[230px] mt-1"
                    >
                      <option value="" defaultValue>
                        Chọn phường xã
                      </option>
                      {dataWards.map((item, index) => (
                        <option key={item.id} value={item.id}>
                          {item.full_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div className="flex gap-x-1">
                      <label htmlFor="address">Địa chỉ</label>
                      <span className="inline text-[red]">*</span>
                    </div>

                    <input
                      type="text"
                      name=""
                      id="address"
                      className="block h-[40px] border-slate-200 focus:ring-0 w-[230px] mt-1"
                      placeholder="địa chỉ chi tiết"
                    />
                  </div>
                </div>
                <div className="note mt-20">
                  <h1 className="font-bold text-lg">THÔNG TIN KHÁC</h1>
                  <p className="font-semibold text-base text-slate-700 mb-[20]">
                    {" "}
                    Ghi chú đơn hàng (tuỳ chọn)
                  </p>
                  <textarea
                    name="note"
                    id="note"
                    rows="10"
                    placeholder="Ghi chú về đơn hàng, ví dụ: Làm ơn giao hàng ngoài giờ hành chính "
                    className="resize w-[520px] max-w-[520px] min-w-[420px] focus:ring-0"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="method-payment border p-6 pt-[50px]">
              <p className="font-bold text-lg">XÁC NHẬN ĐƠN HÀNG</p>
              <p className="text-base font-light text-slate-500 ">
                Hãy xác nhận lần cuối trước khi đặt hàng, bạn có thể thay đổi{" "}
                <Link to="/cart" className="text-red-400">
                  ở đây
                </Link>
              </p>
              <div className="mt-5">
                {/* Item */}
                <div className="flex justify-between items-center mb-2 bg-[#fcfcfc]">
                  <div className="w-[96px] h-[123px]">
                    <img src={ImageProduct} alt="" />
                  </div>
                  <Link
                    to="/product/:product-id"
                    className="w-[218px] font-semibold"
                  >
                    <p>69 Sắc Thái - Giải Phẫu Học Nghệ Thuật</p>
                  </Link>
                  <div className="font-bold">
                    <span>$8.70</span>
                  </div>
                  <div className="font-bold">
                    <span>x1</span>
                  </div>
                  <div className="total font-bold">
                    <p>$8.70</p>
                  </div>
                </div>
                {/* Item */}
                <div className="flex justify-between items-center mb-2 bg-[#fcfcfc]">
                  <div className="w-[96px] h-[123px]">
                    <img src={ImageProduct} alt="" />
                  </div>
                  <Link
                    to="/product/:product-id"
                    className="w-[218px] font-semibold"
                  >
                    <p>69 Sắc Thái - Giải Phẫu Học Nghệ Thuật</p>
                  </Link>
                  <div className="font-bold">
                    <span>$8.70</span>
                  </div>
                  <div className="font-bold">
                    <span>x1</span>
                  </div>
                  <div className="total font-bold">
                    <p>$8.70</p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] bg-[#ebebeb] p-5">
                <p className="font-bold text-xl">Giá trị đơn hàng</p>
                <div className="flex justify-between items-center">
                  <p className="font-base text-slate-500">Giá sản phẩm</p>
                  <span className="font-bold">$8.70</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-base text-slate-500">Giao hàng</p>
                  <span className="font-bold">GHTK đường bộ: $1.30</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-base text-slate-500">Tổng</p>
                  <span className="font-bold">$10.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
