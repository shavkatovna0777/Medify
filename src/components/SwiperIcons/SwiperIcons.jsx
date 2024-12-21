import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function SwiperIcons() {
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper "
    >
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          {" "}
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-3.png"
            alt="Client 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-4.png"
            alt="Client 4"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-5.png"
            alt="Client 5"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-6.png"
            alt="Client 6"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-8.png"
            alt="Client 8"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-1.png"
            alt="Client 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-wrapper h-[72.6px] w-full flex items-center justify-center object-cover p-[0_15px]">
          <img
            className="max-w-[100%] h-auto hover:scale-[1.1] transition-transform duration-300 ease-in-out"
            src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/clients-2.png"
            alt="Client 2"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
