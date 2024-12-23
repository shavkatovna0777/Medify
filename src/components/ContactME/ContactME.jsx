import React from "react";
import { Link } from "react-router-dom";

function ContactME() {
  return (
    <div className="right p-[32px_50px_30px] rounded-[15px] shadow-[8px_9px_35px_0_rgba(41,41,41,0.08)] slg:w-full slg:justify-center md:p-[22px_15px_30px] md:shadow-none">
      <div className="double-heading flex flex-col my-[20px]">
        <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
          Contact Me
        </h1>
      </div>
      <div className="flex items-start w-full gap-[14px] md:gap-[20px] md:flex-col">
        <div className="flex gap-[36px] md:gap-[10px] w-full items-center md:flex-col md:items-start">
          <input
            id="name"
            className="border w-full outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
            type="text"
            placeholder="Your Name*"
          />
        </div>
        <div className="flex w-full gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
          <input
            className="border w-full outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
            inputMode="text"
            placeholder="Your Email*"
          />
        </div>
      </div>
      <div className=" w-full mt-[15px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
        <input
          className="border outline-none  w-full placeholder:font-normal bg-[#F6F7FA] p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none "
          inputMode="text"
          placeholder="Web Site"
        />
      </div>{" "}
      <div className="w-full mt-[15px] h-[20vh] mb-[30px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
        <textarea
          className="border resize-none outline-none w-full bg-[#F6F7FA] placeholder:font-normal pt-2 pl-[20px] pb-[90px] rounded-[7px] text-[17px] font-semibold border-none"
          inputMode="text"
          placeholder="Message..."
        />
      </div>
      <Link
        to={"page"}
        className="text-white bg-blue font-semibold text-[16px] p-[15px_35px] rounded-[5px] hover:bg-white hover:text-blue transform ease-in-out duration-300 border border-blue"
      >
        Send A Message{" "}
      </Link>
    </div>
  );
}

export default ContactME;
