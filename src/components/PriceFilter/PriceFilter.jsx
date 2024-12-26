import React, { useState } from "react";
import { Range } from "react-range";

const PriceFilter = () => {
  const [values, setValues] = useState([40, 250]);

  return (
    <div className="w-full max-w-sm mx-auto p-4  slg:max-w-full slg:p-0">
      <div className="top flex flex-col items-center justify-center">
        <div className="title text-[16px] leading-[1.6] relative z-[1] inline-block font-bold uppercase text-darkBlue">
          <h3>Price</h3>
        </div>
        <div className="text-orange h-4 font-bold cursor-default">__</div>
      </div>
      <div className="flex justify-center mb-5">
        <div className="h-1 w-8 bg-orange-200"></div>
      </div>
      <Range
        step={1}
        min={40}
        max={250}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => {
          const { key, ...restProps } = props;
          return (
            <div
              {...restProps}
              key={key}
              className="w-[85%] slg:w-full slg:mx-2  mx-auto h-1 bg-lightBlue rounded relative"
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              {...restProps}
              key={key}
              className="w-[15px] h-[15px] bg-white shadow-[0_0_7px_0_rgba(39,40,44,0.2)] border-none rounded-full"
            />
          );
        }}
      />
      <div className="flex justify-center gap-[80px] items-center mt-4">
        <span className="font-bold leading-[40px] text-[14px] text-darkBlue">
          Price: ${values[0]} — ${values[1]}
        </span>
        <button className="text-lightBlue font-semibold text-[13px] hover:text-darkBlue transition-all ease-out duration-200">
          FILTER
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
