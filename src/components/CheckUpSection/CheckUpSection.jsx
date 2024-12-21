import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";

function CheckUpSection() {
  return (
    <section className="bg-fixed transition-all duration-300 bg-blue-500 border-blue-600 shadow-md hover:shadow-xl bg-blue bg-center  bg-no-repeat bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/home-2_section_03.png)] ">
      <div className="container">
        <div className="check-up-main w-[calc(100% + 20px)] m-[-10px] ">
          <div className="column relative min-h-1 flex">
            <div className="column-wrap flex w-full relative">
              <div className="column-wrap p-[10px] relative flex flex-col content-start flex-wrap w-full">
                <div className="speacer h-[75px]"></div>
                <div className=" w-full mb-[20px] transition-all duration-500 text-center text-white flex items-center justify-center text-[44px]">
                  <LuPhoneCall />
                </div>
                <div className="div paragraph text-white flex flex-col justify-center items-center mx-auto">
                  <h3 className="text-[28px] inline leading-[60px] font-normal md:leading-[30px] md:text-[22px] md:text-center">
                    Need a Doctor for Check-up? Call for an Emergency Service!
                  </h3>
                </div>
                <div className="div paragraph text-white justify-center items-center mx-auto">
                  <Link
                    target="_blank"
                    to="tel:+998919425545"
                    className="text-[48px] inline leading-[60px] font-bold md:text-[35px]"
                  >
                    +998 91 123 45 67
                  </Link>
                </div>
                <div className="speacer h-[60px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckUpSection;
