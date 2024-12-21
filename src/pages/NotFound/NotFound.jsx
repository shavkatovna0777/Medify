import React, { useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Img from "../../components/LazyLoadImg/Img";

function NotFound() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {" "}
      <div className="bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/404_page_title.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Error Page
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  Error 404
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="main flex flex-col items-center justify-center p-[18px_0_90px] ">
            <div className="img-wrapper mt-[36px] md:px-[20px]">
              <Img
                className="max-w-[100%] h-auto no-drag"
                src="https://wgl-dsites.net/medify/wp-content/themes/medify/img/404.png"
                alt="404 image"
              />
            </div>
            <h1 className="text-[42px] mt-[25px] pb-[8px] leading-60 font-bold inline text-darkBlue md:text-[35px] md:leading-10 md:text-center">
              Sorry We Can't Find That Page!{" "}
            </h1>
            <p className="text-center leading-[36px] mt-[14px] text-[18px] mb-[29px] text-[#3b4964] md:leading-[25px] ">
              The page you are looking for was moved, removed, <br /> renamed or
              never existed.
            </p>
            <form className="flex w-full max-w-[420px] mb-[20px] items-center pl-4 bg-[#f6f6f6] rounded-[5px] overflow-hidden relative z-[1]">
              <input
                type="text"
                // ref={inputRef}
                placeholder={"Search ..."}
                className="outline-none w-full h-full bg-transparent"
              />
              <div className=" w-12 h-12 flex items-center justify-center bg-blue text-white border-none ">
                <IoSearch className="text-[25px]" />
              </div>
            </form>
            <Link
              to={"/"}
              onClick={handleClick}
              className="text-white bg-lightBlue font-semibold text-[16px] p-[13px_35px] rounded-[5px] hover:bg-white hover:text-lightBlue transform ease-in-out duration-300 border border-lightBlue"
            >
              Take me Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
