import React, { useState, useEffect, useRef } from "react";
import Img from "../../components/LazyLoadImg/Img";
import { Link } from "react-router-dom";
import { IoCloseOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import HeaderLink from "../../ui/HeaderLink";
import Navbar from "../Navbar/Navbar";

function HeaderSticky() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchActive]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`bg-white shadow-[1px_0_10px_rgba(0,0,0,0.1)] flex items-center fixed z-[99999] top-0 left-0 w-full transition duration-300 ${
        isSticky
          ? "transform translate-y-0 opacity-100"
          : "transform -translate-y-full opacity-0"
      }`}
    >
      <div className="container py-[20px] flex items-center relative  justify-between slg:hidden">
        <div className="left">
          <Link to={"/"} onClick={handleClick}>
            <Img
              className="h-14 object-contain"
              src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/logo01.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="right flex items-center h-full ">
          <Navbar />
          <div className="h-[50px] w-[2px] bg-[#E5E5E5] mx-[25px]"></div>
          <div className="cursor-pointer">
            <div
              className="search_btn text-[25px] text-darkBlue p-[20px] h-full"
              onClick={toggleSearch}
            >
              {isSearchActive ? (
                <IoCloseOutline className="transition-all duration-300 ease-in-out" />
              ) : (
                <IoSearchOutline className="transition-all duration-300 ease-in-out" />
              )}
            </div>
            <div className={isSearchActive ? "block" : "hidden"}>
              <div className="absolute z-[2] p-[20px] rounded-[15px] bg-white shadow-custom-blue top-[100%] right-0">
                <form className="flex items-center pl-2 bg-[#f6f6f6] rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Search ..."
                    className="outline-none w-full h-full bg-transparent"
                  />
                  <div className="w-12 h-12 flex items-center justify-center bg-blue text-white">
                    <IoSearch className="text-[25px]" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSticky;
