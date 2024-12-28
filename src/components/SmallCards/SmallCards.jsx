import React from "react";
import Card from "../Card/Card";

function SmallCards({SmallCardData}) {
 
  return (
    <section className="cards mt-[-50px] relative z-10 flex justify-center items-center ">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-3 cursor-pointer gap-[25px] md:grid-cols-1 md:gap-[30px] slg:grid-cols-2 justify-items-center md:px-2">
          {SmallCardData.slice(0, 3).map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmallCards;
