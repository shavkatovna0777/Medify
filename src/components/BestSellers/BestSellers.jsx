import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import Img from "../LazyLoadImg/Img";
import { Link } from "react-router-dom";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-orange text-[12px] mx-[1px] mb-1">
          <TbStarFilled />
        </span>
      ))}
      {halfStar && (
        <span className="text-orange text-[12px] ml-[1px] mb-1">
          {" "}
          <TbStarHalfFilled />
        </span>
      )}
    </div>
  );
};

const BestSellers = ({ BestSellersData }) => {
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="p-4 max-w-md mx-auto slg:max-w-full slg:w-full">
      <div className="top flex flex-col items-center justify-center">
        <div className="title text-[16px] leading-[1.6] relative z-[1] inline-block font-bold uppercase text-darkBlue">
          <h3>BestSellers</h3>
        </div>
        <div className="text-orange h-4 font-bold mb-[25px] cursor-default">
          __
        </div>
      </div>
      <ul>
        {BestSellersData.map((item) => (
          <li
            key={item.id}
            className="flex items-start mb-6 space-x-4 pb-2 cursor-pointer"
          >
            <Link onClick={handleClickTop} to={`/product/${item.id}`}>
              <Img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded-[10px] shadow-[5px_4px_13px_0_rgba(145,145,145,0.3)]"
              />
            </Link>
            <div>
              <Link onClick={handleClickTop} to={`/product/${item.id}`}>
                {" "}
                <h3 className="text-[16px] font-bold mb-1 text-darkBlue hover:text-lightBlue transition-all duration-300 ease-in-out">
                  {item.name}
                </h3>
              </Link>
              <StarRating rating={item.rating} />
              <div className="flex items-center space-x-2">
                {item.oldPrice && (
                  <span className="text-[#a5a5a5] line-through text-[14px]">
                    ${item.oldPrice}
                  </span>
                )}
                <span className="text-blue font-bold text-[14px]">
                  ${item.price}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestSellers;
