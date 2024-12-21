import React from "react";
import Img from "../LazyLoadImg/Img";

const ElementorCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card p-[15px] text-[#fff] hover:text-[#ffffffc7]">
      <div className="card-wrapper mt-[24px] transition-all duration-300 ease-in-out hover:transform hover:-translate-y-4">
        <div className="img-wrapper mb-[20px] inline-block w-[100%]">
          <Img src={imageSrc} alt={title} className="w-full" />
        </div>
        <div className="cursor-pointer w-[100%]">
          <div className="title-wrapper">
            <h3 className="text-[23px] font-bold transition-all duration-450 ease-in-out break-words relative leading-[1.4] mb-[10px] z-[1]">
              {title}
            </h3>
          </div>
          <div className="paragraf-wrapper m-[0_0_30px_0] text-[16px] transition-all duration-450 ease-in-out">
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementorCard;
