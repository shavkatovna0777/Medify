import { useState, useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

function CardGrid({ cardData, handleAddToCart }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    setCartItems(storedCartItems);
  }, []);

  const notify = (title) =>
    toast.success(`${title} added to the cart!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClick = (card) => {
    // Create a new cart items object
    const updatedCartItems = { ...cartItems };

    if (updatedCartItems[card.id]) {
      // If item is already in cart, navigate to cart
      navigate("/cart");
    } else {
      // Add item to cart
      updatedCartItems[card.id] = {
        ...card,
        quantity: 1,
      };

      // Update state and localStorage
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      // Call parent's add to cart method
      handleAddToCart(card);

      // Show notification
      notify(card.title);
    }
  };
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <div className="grid grid-cols-3 gap-7 my-[50px]">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="relative p-1 bg-white rounded-lg shadow-lg transition-transform duration-400 cursor-pointer"
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
                className="text-[20px] font-bold hover:text-lightBlue cursor-pointer transition-all duration-300 ease-in-out"
              >
                {card.title}
              </Link>
              <Link
                onClick={handleClickTop}
                to={`/product/${card.id}`}
                className="start-icon flex text-[#FF9E21] gap-[3px] text-[13px] my-[10px]"
              >
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
                <TbStar />
              </Link>

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
