import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("Sort by latest");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    // Close the dropdown if the clicked element is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    // Close the dropdown when scrolling
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks and scroll
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listeners on unmount
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Re-run the effect when `isOpen` changes

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between font-normal text-[16px] text-[#79859c] bg-[#F6F6F6] border-gray rounded-md px-[20px] py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
      >
        {selectedOption}
        <span className="float-right mr-[-15px]">
          <FaAngleDown />
        </span>
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute overflow-hidden z-10 w-full mt-2 text-[#79859c] bg-white border border-gray rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 hover:bg-blue hover:text-white cursor-pointer ${
                option === selectedOption
                  ? "bg-blue font-normal text-white"
                  : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
