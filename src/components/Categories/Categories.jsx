import React from "react";
import { categories } from "../../assets/datas/datas";
import { LuDot } from "react-icons/lu";

function Categories() {
  return (
    <div className="categories flex flex-col">
      {categories.map((category) => (
        <div
          key={category.name}
          className="working-hour flex align-baseline items-center w-[270px] h-[30px] justify-between"
        >
          <div className="working-day mr-[13px] text-darkBlue cursor-pointer font-medium flex items-center hover:text-lightBlue transition-all duration-200 ease-in-out">
            <LuDot className="text-[#AEB6C2] font-bold text-[23px] " />
            {category.name}
          </div>
          <div className="relative flex-1 after:content-[''] after:block after:h-[1.5px] after:bg-[#ECECEC] after:absolute after:top-1/2 after:left-0 after:right-0"></div>
          <div className="woring-hour ml-[13px] text-[#AEB6C2]">
            {category.count}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;