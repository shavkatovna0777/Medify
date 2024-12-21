import React from "react";
import {
  FaFacebookF,
  FaHeartbeat,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderTop() {
  return (
    <div className=" bg-[#F9F9F9] slg:hidden">
      <div className="container flex items-center justify-between">
        <div className="left">
          <div className="flex items-center text-[16px] text-gray gap-[8px] font-normal">
            <h6>The Best Medics, Doctors & Physicians for A Healing Touch </h6>
            <FaHeartbeat />
          </div>
        </div>
        <div className="right flex items-center">
          <div className=" flex items-center gap-[23px] text-gray text-[16px] ">
            <a
              href=""
              className="hover:text-lightBlue transition-all duration-300"
            >
              <FaTwitter className="text-[15px]" />
            </a>
            <a
              href=""
              className="hover:text-lightBlue transition-all duration-300"
            >
              <FaFacebookF className="text-[15px]" />
            </a>
            <a
              href=""
              className="hover:text-lightBlue transition-all duration-300"
            >
              <FaLinkedinIn className="text-[15px]" />
            </a>
            <a
              href=""
              className="hover:text-lightBlue transition-all duration-300"
            >
              <FaInstagram className="text-[15px]" />
            </a>
          </div>
          <div className="w-[42px]"></div>
          <div className="bg-orange text-[#fff] text-[16px] p-[13px_35px] font-bold hover:bg-lightBlue transition-all duration-300">
            <Link to={"contact"} >
              Request a CallBack
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
