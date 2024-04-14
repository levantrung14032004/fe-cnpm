import React from "react";
import { Carousel, Breadcrumb } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import "./ContentProduct.css";
import imageProduct from "../../Images/Img_Product/anh.avif";

export default function ContentProduct() {
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
            <Breadcrumb.Item>Tên sản phẩm</Breadcrumb.Item>
          </div>
        </Breadcrumb>
        <div className="body-content flex gap-10  w-[1170px] m-auto py-[40px] px-[20px]">
          <div className="left w-[510px] h-[650px]">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
              <Carousel className="">
                <img
                  src={imageProduct}
                  alt="..."
                  className="w-[510px] object-cover"
                />
                <img
                  src={imageProduct}
                  alt="..."
                  className="w-[510px] object-cover"
                />
                <img
                  src={imageProduct}
                  alt="..."
                  className="w-[510px] object-cover"
                />
                <img
                  src={imageProduct}
                  alt="..."
                  className="w-[510px] object-cover"
                />
                <img
                  src={imageProduct}
                  alt="..."
                  className="w-[510px] object-cover"
                />
              </Carousel>
            </div>
          </div>
          <div className="right w-[630px] text-left">
            <p className="name text-3xl font-medium">Vạn Nhân Ký – Noãn</p>
            <p className="price py-4 font-bold text-l">150,000₫</p>
            <p className="quote italic text-thin text-sm tracking-widest ">
              Noãn – một vị hoàng thân trẻ tuổi đột ngột bị đặt lên vai gánh
              nặng giành lại giang sơn đã mất. Chàng phải lên đường trốn chạy,
              tận mắt chứng kiến hàng ngàn sinh mạng đã đánh đổi để mình được
              sống, trong lòng chàng là bao nỗi hoang mang và sự hoài nghi chính
              mình. Giữa trách nhiệm với gia tộc và tâm tư của bản thân, Noãn sẽ
              quyết định ra sao? Liệu chàng có tìm được mục đích để tiếp tục
              sống? Trong lúc đó, những người hầu cận quanh chàng dường như lại
              có những ý đồ riêng…z``
            </p>
            <div className="flex py-[40px] gap-5">
              <div className="product-quantity border-slate-300 flex border justify-center items-center py-1 px-1">
                <div className="decrease p-1">
                  <IoIosArrowBack />
                </div>
                <div className="quantity px-3">1</div>
                <div className="increase p-1">
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="flex items-center px-8 py-3 bg-orange-500 text-white gap-2 cursor-pointer  hover:bg-slate-900 duration-200">
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
                Danh Mục:{" "}
                <span className="font-normal">Truyện tranh Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-slate-300 my-10 w-[1170px] m-auto"></div>
        <div className="desc w-[1170px] m-auto py-8 px-10 text-left border-slate-300 border rounded-[5px]">
          {/* Gio thieu san pham */}
          <div>
            <h1 className="font-bold text-3xl py-4">Giới thiệu</h1>
            <p className="py-2 text-thin font-sm text-[#555] leading-7">
              Lấy cảm hứng từ giai đoạn Trịnh – Nguyễn – Tây Sơn phân tranh, Vạn
              Nhân Ký – Noãn mở ra một không gian giả tưởng của kỷ XVIII với
              nhân vật chính Lý Phúc Anh – một hoàng thân thất thế đang trên
              đường chạy trốn. Thời thế đảo điên, nghịch tặc dấy binh làm phản
              đã khiến cơ đồ trăm năm của dòng họ Lý sụp đổ.
            </p>
            <p className="py-2 text-thin font-sm text-[#555] leading-7">
              Sau hàng loạt cái chết của các tôn thất họ Lý, Lý Phúc Anh trở
              thành người sự lựa chọn cuối cùng để thừa kế ngôi vương. Bị kẻ thù
              truy sát, chàng cùng gia quyến và những triều thần tâm phúc buộc
              phải trốn chạy khỏi kinh đô, nếm mật nằm gai chờ ngày phục quốc.
            </p>
            <p className="py-2 text-thin font-sm text-[#555] leading-7">
              Vạn Nhân Ký, được mở màn bằng tập truyện Noãn, là tác phẩm dài kỳ
              đầu tiên của nhóm tác giả Linh Thạch, những nghệ sĩ với niềm say
              mê dành cho lịch sử Việt Nam.
            </p>
            <p className="py-2 text-thin font-sm text-[#555] leading-7">
              Noãn – tập đầu tiên của bộ sách – đã được hai tác giả thai nghén ý
              tưởng trong nhiều năm trước khi thành hình cuốn truyện tranh dày
              hàng trăm trang, chỉn chu về hình ảnh và sâu lắng về nội dung gửi
              đến tay độc giả. Với sự đầu tư công phu về cả hình ảnh lẫn nội
              dung từ hai tác giả Linh và Thạch, chúng tôi tin rằng Vạn Nhân Ký
              – Noãn xứng đáng là bộ truyện tranh dã sử nhận được sự quan tâm,
              hưởng ứng của đông đảo khán giả.
            </p>
          </div>
          {/* Thong tin tu bao chi */}
          <div>
            <h1 className="font-bold text-3xl py-4">Thông tin từ báo chí</h1>
            <ul className="px-[30px] list-disc text-thin">
              <li>
                Bad Luck – Số nhọ: truyện tranh Việt được chuyển thể thành phim
                – Tuổi Trẻ
              </li>
              <li>
                Truyện tranh Việt “Bad Luck” gây sốt một thời sẽ có phiên bản
                live-action trong năm nay! – Kênh 14
              </li>
              <li>
                Truyện tranh về ‘thánh nhọ’ của tác giả Việt được dựng phim –
                Zing.vn
              </li>
              <li>
                Bad Luck – Bộ truyện tranh hài Việt gây sốt hiện nay -Gamek
              </li>
            </ul>
          </div>

          {/* Hinh anh mo ta */}
          <div className="grid grid-cols-3 grid-rows-2 py-5 gap-1">
            <img src={imageProduct} alt="" className="inline-block " />
            <img src={imageProduct} alt="" className="inline-block " />
            <img src={imageProduct} alt="" className="inline-block " />
            <img src={imageProduct} alt="" className="inline-block " />
            <img src={imageProduct} alt="" className="inline-block " />
          </div>
          {/* Thong tin san pham */}
          <div>
            <h1 className="font-bold text-3xl py-4">Thông tin sản phẩm</h1>
            <ul className="px-[30px] list-disc text-thin">
              <li>Cuốn sách dày 312 trang, bìa rời, kích thước 14.5×20.5cm</li>
              <li>Thể loại: Dã sử, tâm lý, hành động, truyện tranh Việt Nam</li>
              <li>Đối tượng: 16+</li>
              <li>Phát hành: Tháng 3/2023</li>
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
