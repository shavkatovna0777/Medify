import React from "react";
import SwiperIcons from "../SwiperIcons/SwiperIcons";
import { TiMinus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  return (
    <section className="bg-[#F9F9F9]">
      <div className="container">
        <div className="speacer h-[90px] md:h-[30px]"></div>
        <div className="service-main ">
          <div className="title flex flex-col items-center p-[10px] mx-[200px] md:mx-[100px]">
            <span className="uppercase flex items-center gap-[5px] font-semibold text-[16px] md:font-medium md:whitespace-nowrap md:text-[13px]  text-orange">
              <b>
                <TiMinus />
              </b>
              our services{" "}
              <b>
                <TiMinus />
              </b>
            </span>
            <h1 className="text-[42px] text-darkBlue font-bold slg:whitespace-nowrap md:text-[25px] ">
              What We Can Offer You
            </h1>
            <p className="items-center text-center text-[16px] text-[#3b4964] m-[0_0_20px_0] slg:text-[13px] md:hidden">
              We have introduced the principle of family medicine, which means
              that the family practitioner will handle the majority of medical
              requests, with a specialists involved only if necessary.
            </p>
          </div>
          <div
            className="cards w-[calc(100%+30px)] flex slg:flex-wrap items-center justify-center md:w-[calc(100%+3px)]"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <div className="card cursor-pointer p-[15px] ">
              <div className="img-wrapper rounded-[15px] overflow-hidden">
                {" "}
                <img
                  className="max-w-[100%] h-auto"
                  src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/service3-1.jpg"
                  alt=""
                />
              </div>
              <div className="cursor-pointer transition-all duration-400 ease-in-out text-center m-[-30px_20px_0_20px] ">
                <h3 className="inline-block text-[24px] p-[18px_33px_18px_33px] rounded-[10px] text-darkBlue font-semibold leading-[1] shadow-[8px_9px_35px_rgba(49,49,49,0.08)] bg-white">
                  Dental Fillings
                </h3>
              </div>
            </div>
            <div className="card cursor-pointer p-[15px]">
              <div className="img-wrapper rounded-[15px] overflow-hidden">
                <img
                  src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/service3-2.jpg"
                  alt=""
                />
              </div>
              <div className=" cursor-pointer m-[-30px_20px_0_20px] transition-all duration-400 ease-in-out text-center  ">
                <h3 className="inline-block text-[24px] p-[18px_33px_18px_33px] rounded-[10px] text-darkBlue font-semibold leading-[1] shadow-[8px_9px_35px_rgba(49,49,49,0.08)] transition-all duration-400 bg-white">
                  Orthodonics
                </h3>
              </div>
            </div>
            <div className="card cursor-pointer p-[15px]">
              <div className="img-wrapper rounded-[15px] overflow-hidden">
                <img
                  src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/service3-3.jpg"
                  alt=""
                />
              </div>
              <div className=" cursor-pointer m-[-30px_20px_0_20px] transition-all duration-400 ease-in-out text-center ">
                <h3 className="inline-block text-[24px] p-[18px_33px_18px_33px] rounded-[10px] text-darkBlue font-semibold leading-[1] shadow-[8px_9px_35px_rgba(49,49,49,0.08)] transition-all duration-400 bg-white">
                  Tooth Extraction
                </h3>
              </div>
            </div>
          </div>
          <div className="speacer h-[90px] md:h-[30px]"></div>
          <div className="swiper flex items-center">
            <SwiperIcons />
          </div>
          <div className="speacer h-[90px] md:h-[30px]"></div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
