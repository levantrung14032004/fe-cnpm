import "./cart.css";
import { Link } from "react-router-dom";
import img_Product from "../../Images/Img_Product/TEMPLATE_1.jpg";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, unincreaseQuantity } from "../../Slice/cartSlice";

export default function Cart() {
  const itemsOfCart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const increaseItem = (item) => {
    dispatch(increaseQuantity(item));
  };

  const decreaseItem = (item) => {
    dispatch(unincreaseQuantity(item));
  };
  return (
    <div>
      <div className="cart">
        <div className="breadcrumb bg-[#f4f9fc] h-20 flex items-center justify-center">
          <a href="/" className="px-1">
            Trang Chủ
          </a>{" "}
          / <p className="font-medium px-1"> Giỏ hàng</p>
        </div>
        {/* Cart Content */}
        <div className="cart-content py-10">
          <div className="heading font-extrabold text-2xl pb-10 w-[1170px] m-auto">
            <p>Giỏ hàng</p>
          </div>
          <div className="cart-box w-[1170px] m-auto">
            {/* Print List */}
            {itemsOfCart.map((item) => (
              <div className="item h-[154px] bg-[#fcfcfc] flex items-center justify-between my-2">
                <div
                  className="product-img w-[120px] object-cover
              "
                >
                  <img src={img_Product} alt="Anh san pham" />
                </div>
                <div className="product-name w-[280px] font-light">
                  <a href="/#">{item.name}</a>
                </div>
                <div className="product-price">{item.price}₫</div>
                <div className="product-quantity border-slate-300 flex border justify-center items-center py-1 px-1">
                  <div
                    className="decrease p-1"
                    onClick={() => decreaseItem(item)}
                  >
                    <IoIosArrowBack />
                  </div>
                  <div className="quantity px-3">{item.quantity}</div>
                  <div
                    className="increase p-1"
                    onClick={() => {
                      increaseItem(item);
                    }}
                  >
                    <IoIosArrowForward />
                  </div>
                </div>
                <div className="product-total">Giá sản phẩm: {item.total}₫</div>
                <div className="product-cancel border p-1 mr-5">
                  <FaTimes />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between w-[1170px] m-auto py-10 border-b-2">
            <div className="coupons border-gray-700 border-solid border p-1 rounded-sm">
              <input
                type="text"
                name=""
                id=""
                placeholder="Nhập mã giảm giá"
                className="border-none outline-none w-[300px] px-2"
              />
              <button
                type="button"
                className="h-full w-28 bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200"
              >
                Apply
              </button>
            </div>
            <Link
              to="/products"
              className=" border flex items-center p-3 px-4 font-semibold"
            >
              <CiShoppingCart />
              <p>TIẾP TỤC MUA SẮM</p>
            </Link>
          </div>
        </div>

        {/* After Cart */}
        <div className="w-[1170px] m-auto mb-[40px]">
          <div className="">
            <div className="bg-[#fcfcfc] w-[540px] py-[40px] px-[30px] text-left rounded">
              <p className="font-bold mb-7">Cộng giỏ hàng</p>
              <div className="flex justify-between items-center">
                <p className="text-thin text-sm">Tạm tính</p>
                <span className="inline-block font-bold">78,000₫</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-thin text-sm">Giao hàng</p>
                <span className="inline-block font-bold">
                  Phí vận chuyển sẽ báo sau.
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-thin text-sm">Tổng</p>
                <span className="inline-block font-bold">78,000₫</span>
              </div>
              <button
                type="button"
                className="h-full w-[300px] bg-orange-500 text-white p-2 font-bold hover:bg-slate-900 duration-200 mt-5 flex items-center justify-center "
              >
                <FaLock className="mr-2" /> TIẾN HÀNH THANH TOÁN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
