// HeaderMobile.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoSearch,
  IoSearchOutline,
} from "react-icons/io5";
import Img from "../../components/LazyLoadImg/Img";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

function HeaderMobile() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <>
      <div className="container relative mobile bg-[#313131] h-full hidden slg:flex items-center justify-between">
        <div className="text-white text-[35px]" onClick={() => setIsOpen(true)}>
          <IoMenuOutline />
        </div>
        <div className="left flex h-full items-center justify-center">
          <Link to={"/"}>
            <Img
              className="h-12 object-contain slg:block slg:place-items-center"
              src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/logo02.png"
              alt=""
            />
          </Link>
        </div>
        <div className="search_btn text-[25px] text-white" onClick={toggleSearch}>
          {isSearchActive ? (
            <IoCloseOutline className="transition-all duration-300 ease-in-out transform translate-x-[-0.5px] slg:transform slg:translate-x-0" />
          ) : (
            <IoSearchOutline className="transition-all duration-300 ease-in-out transform translate-x-[-0.5px]" />
          )}
        </div>
        <div
          className={`${
            isSearchActive ? "opacity-[1] visible" : "opacity-0 invisible"
          } block z-[2] p-[10px] rounded-[15px] bg-white shadow-blue right-[15px] absolute duration-200 top-full`}
        >
          <form className="flex items-center pl-2 bg-[#f6f6f6] rounded-[5px] overflow-hidden relative z-[1]">
            <input
              type="text"
              ref={inputRef}
              placeholder="Search ..."
              className="outline-none w-full h-full bg-transparent"
            />
            <button className="w-12 h-12 flex items-center justify-center bg-blue text-white border-none">
              <IoSearch className="text-[25px]" />
            </button>
          </form>
        </div>
      </div>

      <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default HeaderMobile;