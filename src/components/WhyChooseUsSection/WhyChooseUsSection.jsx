import React, { useEffect } from "react";
import { TiMinus } from "react-icons/ti";
import WhyChooseUsCard from "../WhyChooseUsCards/WhyChooseUsCards";
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUsSection({WhyChooseUsCardData}) {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200,once: true });
  }, []);
 
  return (
    <section className="bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/section-bg-16.jpg)] object-cover min-h-[700px] bg-no-repeat ">
      <div className="container">
        <div className="parent flex items-center justify-between h-full">
          <div  className="left w-[570px] h-[700px] flex items-center slg:w-full slg:justify-center" data-aos="fade-right"
          data-aos-once="true">
            <div className="left-wrapper bg-white p-[60px_60px_65px_60px] w-[570px] slg:w-[700px] h-[535px] rounded-[15px] shadow-[10px_8px_35px_rgba(49,49,49,0.08)] transition-all duration-300 ease-in-out bg-[10px_15px] mx-[10px] my-[90px] md:h-[95%] md:w-[100%] md:p-[17px_30px_35px_30px]">
              <div className="headings flex flex-col m-[0_0_26px_0]">
                <div className="paragraph-wrapper text-orange">
                  <span className=" gap-[5px] flex items-center uppercase font-semibold">
                    See the Difference{" "}
                    <b>
                      <TiMinus />
                    </b>
                  </span>
                </div>
                <h3 className="heading-wrapper leading-[0] md:whitespace-nowrap">
                  <span className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px]">
                    Why Choose Us?
                  </span>
                </h3>
              </div>
              <div className="cards flex flex-col">
                {WhyChooseUsCardData.map((card, index) => (
                  <WhyChooseUsCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
