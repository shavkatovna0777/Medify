import React, { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";

function ScrollToTop() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {" "}
      {showScrollBtn && (
        <div
          data-aos="fade-left"
          className="fixed bottom-6 z-[11] right-6 bg-blue-500 p-3 rounded-full bg-lightBlue shadow-lg cursor-pointer"
          onClick={scrollToTop}
        >
          <TbArrowUp className="text-white  text-2xl" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
