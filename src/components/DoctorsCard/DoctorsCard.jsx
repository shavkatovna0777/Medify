import React from "react";
import { FaPlus, FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
import Img from "../LazyLoadImg/Img";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor = {} }) => {
  if (!doctor.id) {
    console.error("Doctor object is missing or 'id' is undefined:", doctor);
    return null; 
  }
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="card px-[15px] slg:w-[100%] md:w-full pb-[30px]">
      <div className="img-wrapper w-[100%] overflow-hidden rounded-[15px] relative">
        <Link to={`/page/${doctor.id}`} onClick={handleClickTop}>
          <Img
            className="w-full h-auto object-cover rounded-[15px]"
            src={doctor.imgSrc}
            alt={name}
          />
        </Link>
        <div className="info-icons absolute right-[20px] top-[22px] z-[1] group">
          <div className="icon-plus inline-block z-[-1] bg-white text-blue p-[8px] transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-blue group-hover:text-white ease-in-out rounded-[50%] cursor-pointer shadow-custom-blue">
            <Link>
              <FaPlus />
            </Link>
          </div>
          <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[44px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-100 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
            <Link className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full">
              <FaTwitter />
            </Link>
          </span>
          <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[88px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-200 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
            <Link className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full">
              <FaFacebookF />
            </Link>
          </span>
          <span className="block bg-white text-blue text-[13px] translate-y-[-100%] mb-[10px] transition-all duration-400 opacity-0 w-0 h-0 text-center leading-[34px] rounded-full absolute group-hover:top-[132px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:w-[34px] group-hover:h-[34px] group-hover:mb-[15px] group-hover:delay-300 ease-in-out after:content-[''] after:absolute after:w-full after:h-[10px] after:left-0 after:top-[-10px] cursor-pointer ">
            <Link className="h-full flex hover:bg-blue hover:shadow-xl hover:text-white duration-[0.4s] items-center justify-center rounded-full">
              <FaPinterestP />
            </Link>
          </span>
        </div>
      </div>
      <div className="card-content">
        <Link to={`/page/${doctor.id}`} onClick={handleClickTop}>
          <h3 className="text-[20px] font-semibold text-darkBlue transform duration-300 ease-in-out cursor-pointer hover:text-lightBlue">
            {doctor.name}
          </h3>
        </Link>
        <p className="text-[#3b4964]">{doctor.role}</p>
        <h5 className="text-[16px] text-lightBlue font-bold">
          Working since {doctor.workingSince}
        </h5>
      </div>
    </div>
  );
};

export default DoctorsCard;
