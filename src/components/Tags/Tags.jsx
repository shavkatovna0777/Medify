import React from "react";
import { cardData } from "../../assets/datas/datas";

function Tags({ selectedTag = "All", setSelectedTag }) {
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  const filteredCards = cardData.filter((card) => {
    const cardCategory = card.category ? card.category.toLowerCase() : ""; // Add check for undefined category
    const selectedTagLowerCase = selectedTag.toLowerCase(); // Always call .toLowerCase() on defined strings
    
    return cardCategory === selectedTagLowerCase || selectedTag === "All";
  });
  return (
    <section>
      <div className="top flex flex-col items-center justify-center">
        <div className="title text-[16px] leading-[1.6] relative z-[1] inline-block font-bold uppercase text-darkBlue">
          <h3>Tags</h3>
        </div>
        <div className="text-orange h-4 font-bold mb-[25px] cursor-default">
          __
        </div>
        <div className="parent-btn flex items-start flex-wrap border mx-auto justify-center">
          <div className="top-btn flex flex-wrap gap-[5px] pb-2 w-[48%]">
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
                className={`py-1 px-4 rounded-[5px] transition-all duration-300 ease-in-out ${
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
