import { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Star } from "lucide-react";

function CardGrid({ cardData, handleAddToCart }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    setCartItems(storedCartItems);
  }, []);

  const notify = (title) =>
    toast.success(`${title} added to the cart!`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClick = (card) => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingProduct = storedCartItems.find((item) => item.id === card.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      storedCartItems.push({ ...card, quantity: 1 });
    }

    setCartItems(storedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
    notify(card.title);
  };

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getRandomRating = () => {
    return Math.floor(Math.random() * 2) + 3;
  };

  const renderStarRating = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={14}
            className={`${
              index < rating
                ? "text-orange fill-orange"
                : "text-[#CFC8D8] fill-[#CFC8D8]"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="grid grid-cols-3 gap-7 my-[50px] md:grid-cols-2 md:gap-4 md:items-center md:content-center md:w-full ">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="relative p-1 bg-white rounded-lg shadow-lg transition-transform duration-400 cursor-pointer md:max-w-full "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link onClick={handleClickTop} to={`/product/${card.id}`}>
              <Img
                src={hoveredIndex === index ? card.hoverImg : card.img}
                alt={card.title}
                className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
              />
            </Link>

            <div className="text-darkBlue bg-opacity-50 p-[0_10px_15px] rounded-lg">
              <Link
                onClick={handleClickTop}
                to={`/product/${card.id}`}
                className="text-[20px] md:text-[15px] md:whitespace-nowrap font-bold hover:text-lightBlue cursor-pointer transition-all duration-300 ease-in-out"
              >
                {card.title}
              </Link>
              <div className="stars my-2"> {renderStarRating(getRandomRating())}</div>

              <p className="text-blue font-bold">${card.price}</p>
            </div>

            <div
              onClick={() => handleClick(card)}
              className={`absolute bottom-4 right-4 px-3 py-3 flex justify-center items-center rounded-full transition-all duration-500 ease-in-out transform ${
                hoveredIndex === index
                  ? "translate-y-9 bg-blue"
                  : "translate-y-0 bg-transparent"
              }`}
            >
              {hoveredIndex === index && (
                <button className="text-white text-[18px]">
                  <BsCart2 />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default CardGrid;
