import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Img from "../../components/LazyLoadImg/Img";
import { TiMinus } from "react-icons/ti";
import ProgressBar from "../../ui/ProgressBar";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperIcons from "../../components/SwiperIcons/SwiperIcons";
import DoctorsCard from "../../components/DoctorsCard/DoctorsCard";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function DoctorsPage({ doctorData }) {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  return (
    <>
      <div className="doctors-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_page-title.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Doctors
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  Doctors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scaper h-[50px] md:h-0"></div>
      <section>
        <div className="container">
          <div className="docs-main flex slg:flex-wrap w-full content-start gap-[30px] slg:content-center">
            <div
              className="left p-[15px] slg:justify-center slg:mx-auto "
              data-aos="fade-right"
              data-aos-once="true"
            >
              <div className="img-wrapper w-[600px] h-[450px] rounded-[15px] overflow-hidden md:w-auto md:h-auto">
                <Img
                  className={"max-w-full h-auto object-cover"}
                  src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/doctors.jpg"
                  alt=""
                />
              </div>
            </div>
            <div
              className="right p-[15px] flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-once="true"
            >
              <div className="content flex flex-col ">
                <span className="uppercase  flex items-center gap-[5px] font-semibold text-[16px] slg:text-[13px] md:font-medium md:whitespace-nowrap md:text-[13px] text-orange">
                  Our Skills
                  <b>
                    <TiMinus />
                  </b>
                </span>
                <h1 className="text-[42px] pb-[15px] leading-60 font-bold inline text-darkBlue slg:whitespace-nowrap slg:text-[35px] md:text-[25px] md:whitespace-pre-wrap md:text-start md:leading-8">
                  You Can Trust Medify Proffesional Doctors
                </h1>
              </div>
              <ProgressBar />
            </div>
          </div>
          <div className="scaper h-[80px] md:h-0"></div>
          <SwiperIcons />
          <div className="scaper h-[60px]"></div>
        </div>
      </section>
      <section className="doctors bg-[#F9F9F9]">
        <div className="container">
          <div className="scaper h-[80px]"></div>
          <div className="content text-center mb-[20px]">
            <div className="paragraph-wrapper text-orange">
              <span className=" gap-[5px] flex items-center uppercase font-semibold justify-center">
                <b>
                  <TiMinus />
                </b>
                Our Team
                <b>
                  <TiMinus />
                </b>
              </span>
            </div>
            <h3 className="heading-wrapper leading-[0] md:whitespace-nowrap">
              <span className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px]">
                Meet Our Doctors
              </span>
            </h3>
          </div>
          <div className="doc-cards grid grid-cols-4 items-center pt-[10px] slg:grid-cols-2 slg:place-items-center md:w-full md:grid-cols-1">
            {doctorData.map((doc) => (
              <DoctorsCard key={doc.id} doctor={doc} />
            ))}
          </div>
          <div className="scaper h-[80px]"></div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default DoctorsPage;
