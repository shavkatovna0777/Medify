import React, { useEffect, useState } from "react";
import Img from "../../components/LazyLoadImg/Img";
import { Link } from "react-router-dom";
import {
  IoIosArrowForward,
  IoIosClose,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { formatCurrency } from "/src/utils/formatCurrency.js";

const Cart = ({ delivery = 0 }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart items from localStorage, default to an empty array if not available
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Ensure the data is always an array
    if (Array.isArray(savedCart)) {
      setCartItems(savedCart);
    } else {
      setCartItems([]); // fallback to empty array if invalid data is found
    }
  }, []);

  // Safely calculate total price only if cartItems is an array
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  // Update localStorage whenever cartItems change
  useEffect(() => {
    if (Array.isArray(cartItems)) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemoveItem = (id, title) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const updateItemQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  return (
    <>
      <div className="cart-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Cart
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link
                  to={"/products"}
                  className="current opacity-70 text-darkBlue "
                >
                  Shop
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          {cartItems.length === 0 ? (
            <div>
              <div className="px-4 py-5 flex items-center w-full rounded-sm shadow-lg justify-between">
                <div className="flex items-center gap-4">
                  <span className=" p-1.5 rounded-md bg-lightBlue ">
                    <IoIosInformationCircleOutline className="text-[40px] text-white" />
                  </span>
                  <p className="text-darkBlue text-[14px]">
                    Your cart is currently empty.
                  </p>
                </div>
                <div className=" p-3">
                  <AiOutlineClose className="text-[20px] text-[#D2D2D2] transition-all ease-out duration-300 hover:text-darkBlue" />
                </div>
              </div>
              <Link to={"/products"}>
                <button className="border font-medium bg-blue text-white px-5 py-2.5 mt-8">
                  Return To Shop
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className=" bg-lightBlue rounded-md py-[15px]">
                <div className="parent flex items-center justify-between">
                  <div className="left  w-full pl-5">
                    <h2 className="font-medium text-[18px] text-white">
                      Product
                    </h2>
                  </div>
                  <div className="right flex items-center justify-between w-full ">
                    <h3>
                      <span className="font-medium text-[18px] text-white">
                        Price
                      </span>
                    </h3>
                    <h3>
                      <span className="font-medium text-[18px] text-white">
                        Quantity
                      </span>
                    </h3>
                    <h3>
                      <span className="font-medium text-[18px] text-white">
                        Subtotal
                      </span>
                    </h3>
                    <h3>
                      <span></span>
                    </h3>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col ">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className=" border-b-[1px] border-[#E5E5E5] w-full flex items-center pl-5 py-5"
                  >
                    <div className="flex items-center  w-[95%] gap-10">
                      <Link to={"/productSingle"}>
                        <Img
                          src={item.img}
                          alt="product image"
                          className={
                            "w-20 h-20 object-contain rounded-[8px] shadow-[5px_4px_13px_0_rgba(145,145,145,0.3)]"
                          }
                        />
                      </Link>
                      <Link to={"/productSingle"}>
                        <h3 className="text-[18px] text-darkBlue font-bold transition-all duration-200 ease-in-out hover:text-blue">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="parent flex items-center justify-between w-[48%]">
                        <p className="text-blue font-semibold text-[16px]">
                          ${item.price ? Number(item.price).toFixed(2) : "0.00"}
                        </p>
                        <div className="flex items-center justify-center ">
                          <div
                            className="btn border border-[#E5E5E5] px-2.5 rounded-full text-xl"
                            onClick={() =>
                              updateItemQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            <button className="text-[20px] font-semibold text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                              -
                            </button>
                          </div>
                          <p className="w-8 items-center justify-center mx-auto flex text-darkBlue font-bold">
                            {item.quantity}
                          </p>
                          <div
                            className="btn border border-[#E5E5E5] px-2 rounded-full text-xl"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <button className="text-[20px] font-semibold text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="parent2 flex items-center w-[33%] justify-between">
                        <p className="text-blue font-semibold text-[16px]">
                          {item.quantity} × $
                          {item.price ? Number(item.price).toFixed(2) : "0.00"}
                        </p>
                        <button
                          className=" p-5 text-xl text-[#A5A5A5] hover:text-red-700 transition-all duration-150 ease-in-out"
                          onClick={() => {
                            handleRemoveItem(item.id, item.title);
                          }}
                        >
                          <IoIosClose />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="sticky top-[80px] pt-[67px] md:pt-0 flex flex-col min-w-[300px]">
                <div className="shadow-xl p-4 bg-white rounded-[16px] flex flex-col gap-2">
                  <h6 className="font-semibold text-[20px]">Jami:</h6>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="font-semibold">Mahsulotlar</p>
                      <p className="font-medium">${totalPrice}</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="font-semibold">To'lov miqdori</p>
                      <p className="font-medium">${totalPrice + delivery}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Cart;
