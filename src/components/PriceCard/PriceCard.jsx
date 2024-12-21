import { Link } from "react-router-dom";

function PriceCard({
  price,
  title,
  description1,
  description2,
  description3,
  description4,
  description5,
}) {
  return (
    <div className="card bg-white flex flex-col items-center justify-center p-[37px_30px_40px_40px] rounded-[15px] shadow-[10px_8px_35px_0_rgba(0,42,106,0.1)] transform transition-transform duration-500 hover:-translate-y-6 md:p-[27px_20px_30px_30px] sm:mx-[15px] sm:my-[10px]">
      <div className="flex flex-col items-center justify-center">
        <div className="heading p-[43px_35px_37px]  ">
          <h4
            id="standard "
            className="text-center text-[24px] font-bold text-darkBlue"
          >
            {title}
          </h4>
          <div className="pricing flex items-center ">
            <span className="inline-block pr-[4.8px] text-[1.5rem] text-lightBlue font-bold leadin-[1.3] mb-[18px] align-top">
              $
            </span>
            <div className="inline-block pb-[2px] leading-[0.95] text-[4.5rem] font-bold text-lightBlue">
              {price}
            </div>
            <div className="inline-block whitespace-nowrap align-bottom text-end text-[1.3rem] leading-[1.75] pl-[0.4rem] text-lightBlue mt-[15px] font-normal">
              / month
            </div>
          </div>
        </div>
        <div className="card-content text-center ">
          <div className="text-[16px] sm:m-[0_0_20px_0] sm:text-[13px]">
            <p
              className="text-center text-darkBlue mb-[20px] text-[18px] font-extrabold"
              id="text1"
            >
              {description1}
            </p>
            <p
              className="text-center text-darkBlue mb-[20px] text-[18px] font-extrabold"
              id="text2"
            >
              {description2}
            </p>
            <p
              className="text-center text-darkBlue mb-[20px] text-[18px] font-extrabold"
              id="text3"
            >
              {description3}
            </p>
            <p
              className="text-center text-darkBlue mb-[20px] text-[18px] font-extrabold"
              id="text4"
            >
              {description4}
            </p>
            <p
              className="text-center text-darkBlue mb-[20px] text-[18px] font-extrabold"
              id="text5"
            >
              {description5}
            </p>
          </div>
        </div>
        <div className="btn mt-[45px] mb-[-40px] md:mb-[-30px] border p-[17px_38px] bg-lightBlue rounded-[5px_5px_0_0] text-white">
          <Link to="page" className="text-[16px] font-bold">
            Buy Now
          </Link>
        </div>
        <a
          href="#"
          className="absolute top-0 left-0 w-[100%] h-[100%] z-[2]"
        ></a>
      </div>
    </div>
  );
}

export default PriceCard;
