import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtn from "./../../ui/SwiperBtn";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Img from "../LazyLoadImg/Img";

function SwiperBigCards({SwiperBigCardDatas}) {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        navigation={{
          prevEl: "#swiper-prev",
          nextEl: "#swiper-next",
        }}
        modules={[Navigation, Autoplay]}
        initialSlide={1}
        className="overflow-visible"
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {SwiperBigCardDatas.map((data, index) => (
          <SwiperSlide key={index} className="aspect-[3/1.2] h-full fixed">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={data.img}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[50%] left-[40px] z-[10] w-[95%] flex justify-between">
        <SwiperBtn
          id="swiper-prev"
          className=" left-12 transform -translate-y-1/2 slg:hidden"
        >
          <RiArrowLeftSLine />
        </SwiperBtn>
        <SwiperBtn
          id="swiper-next"
          className=" right-12 transform -translate-y-1/2 slg:hidden"
        >
          <RiArrowRightSLine />
        </SwiperBtn>
      </div>
    </div>
  );
}

export default SwiperBigCards;
