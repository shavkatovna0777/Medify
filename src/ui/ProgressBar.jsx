import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
function ProgressBar() {
    const [ref, inView] = useInView({ threshold: 0.5 });
    const [isPageLoaded, setIsPageLoaded] = useState(false);
  
    useEffect(() => {
      setIsPageLoaded(true); 
    }, []);
  
    const isVisible = isPageLoaded && inView;

  return (
    <div ref={ref} className="progress-bar-main flex flex-col">
      <div className="progress-bar mb-[20px] w-full">
        <div
          className={`progress-wrap transition-width duration-[1500ms] ease-in-out ${
            isVisible ? "w-[100%]" : "w-0"
          }`}
        >
          <div className="label-wrap flex justify-between items-center w-[87%] whitespace-nowrap leading-[1] pb-[10px] relative">
            <div className="label m-[0_0_5px_0] text-darkBlue font-medium text-[16px]">
              Oncology
            </div>
            <div className="value-wrap z-[2] font-medium text-[12px] rounded-[5px] bg-orange text-white p-[6px_5px] absolute bottom-[-16px] right-[-5px]">
              <span>87</span>
              <span>%</span>
            </div>
          </div>
          <div className="bar-wrap rounded-[4px]">
            <div className="progress-bar rounded-[4px] h-[8px] bg-orange block relative w-full z-0">
              <div className="pro-bar-small w-[87%] bg-orange absolute z-[1] top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-bar mb-[20px] w-full">
        <div
          className={`progress-wrap  transition-all duration-[1500ms] ease-in-out ${
            isVisible ? "w-[100%]" : "w-0"
          }`}
        >
          <div className="label-wrap flex justify-between items-center w-[65%] whitespace-nowrap leading-[1] pb-[10px] relative">
            <div className="label m-[0_0_5px_0] text-darkBlue font-medium text-[16px]">
              Gynecology
            </div>
            <div className="value-wrap z-[2] text-[12px] font-medium rounded-[5px] bg-blue text-white p-[6px_5px] absolute bottom-[-16px] right-[-5px]">
              <span>65</span>
              <span>%</span>
            </div>
          </div>
          <div className="bar-wrap rounded-[4px]">
            <div className="progress-bar rounded-[4px] h-[8px] bg-blue block relative w-full z-0">
              <div className="pro-bar-small w-[65%] bg-blue absolute z-[1] top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-bar mb-[20px] w-full">
        <div
          className={`progress-wrap transition-width duration-[1500ms] ease-in-out ${
            isVisible ? "w-[100%]" : "w-0"
          }`}
        >
          <div className="label-wrap flex justify-between items-center w-[92%] whitespace-nowrap leading-[1] pb-[10px] relative">
            <div className="label m-[0_0_5px_0] text-darkBlue font-medium text-[16px]">
              Rehabilitation
            </div>
            <div className="value-wrap z-[2] text-[12px] font-medium rounded-[5px] bg-lightBlue text-white p-[6px_5px] absolute bottom-[-16px] right-[-5px]">
              <span>92</span>
              <span>%</span>
            </div>
          </div>
          <div className="bar-wrap rounded-[4px]">
            <div className="progress-bar rounded-[4px] h-[8px] bg-lightBlue block relative w-full z-0">
              <div className="pro-bar-small w-[92%] bg-lightBlue absolute z-[1] top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
