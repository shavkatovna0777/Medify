import React, { useEffect } from "react";
import { TiMinus } from "react-icons/ti";
import PriceCard from "../PriceCard/PriceCard";
import AOS from "aos";
import "aos/dist/aos.css";

function PriceSection({ PriceSectionCardData }) {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  return (
    <section className=" bg-[#F9F9F9]">
      <div className="container">
        <div className="speacer h-[110px]"></div>
        <div className="heading-main text-center">
          <div className="heading">
            <div className="top text-orange text-center flex items-center justify-center">
              <span className=" gap-[5px] text-[15px] flex items-center uppercase font-semibold">
                <b>
                  <TiMinus />
                </b>
                pricing plan
                <b>
                  <TiMinus />
                </b>
              </span>
            </div>
            <div className="title mb-[10px]">
              <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
                Choose Your Optimal Plan
              </h1>
              <p className="text-[#3b4964] justify-center mx-auto text-center w-[65%] md:w-full">
                We have introduced the principle of family medicine, which means
                that the family practitioner will handle the majority of medical
                requests, with a specialists involved only if necessary.
              </p>
            </div>
          </div>
        </div>
        <div
          className="cards-parent mt-[50px] w-[calc(100%+30px)] gap-[40px] slg:w-full flex slg:flex-wrap items-center justify-center md:w-[calc(100%+3px)]"
          data-aos="fade-right"
          data-aos-once="true"
        >
          {PriceSectionCardData.map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              description1={card.description1}
              description2={card.description2}
              description3={card.description3}
              description4={card.description4}
              description5={card.description5}
            />
          ))}
        </div>
        <div className="speacer h-[77px]"></div>
      </div>
    </section>
  );
}

export default PriceSection;
