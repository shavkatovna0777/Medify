import React from "react";
import { cardData } from "../../assets/datas/datas";

function Tags({ selectedTag = "All", setSelectedTag, setFilteredProducts }) {
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    const filtered = tag === "All" 
      ? cardData 
      : cardData.filter(product => 
          product.tags.some(productTag => 
            productTag.toLowerCase() === tag.toLowerCase()
          )
        );
    
    setFilteredProducts(filtered);
  };

  return (
    <section className=" slg:w-full slg:max-w-full">
      <div className="top flex flex-col  items-center justify-center">
        <div className="title text-[16px] leading-[1.6] relative z-[1] inline-block font-bold uppercase text-darkBlue">
          <h3>Tags</h3>
        </div>
        <div className="text-orange h-4 font-bold mb-[25px] cursor-default">
          __
        </div>
        <div className="parent-btn flex items-start flex-wrap mx-auto justify-center">
          <div className="top-btn grid grid-cols-3  text-[14px] gap-2 pb-2 w-full slg:grid-cols-8 md:grid-cols-3 md:gap-3">
            {[
              "All",
              "Beauty",
              "Clinic",
              "Doctor",
              "Healthcare",
              "Hospital",
              "Medicine",
              "Patient",
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`py-1 px-2 rounded-[5px] transition-all duration-300 ease-in-out ${
                  selectedTag === tag
                    ? "bg-lightBlue text-white"
                    : "bg-[#F7F7F7] text-[#3b4964] hover:bg-lightBlue hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tags;