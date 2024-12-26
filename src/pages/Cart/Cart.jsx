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
  const calculateItemSubtotal = (item) => {
    return item.quantity * (item.price || 0);
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
              <div className=" bg-lightBlue rounded-md py-[15px] md:hidden">
                <div className="parent flex items-center justify-between">
                  <div className="left w-full pl-5">
                    <h2 className="font-medium text-[18px] text-white">
                      Product
                    </h2>
                  </div>
                  <div className="right flex items-center justify-around  w-full ">
                    <h3>
                      <span className="font-medium text-[18px] text-white">
                        Price
                      </span>
                    </h3>
                    <span></span>
                    <h3>
                      <span className="font-medium text-[18px] text-white">
                        Quantity
                      </span>
                    </h3>
                    <span></span>
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
                    className=" border-b-[1px]  rounded-lg border-[#E5E5E5] w-full flex items-center pl-5 py-5 md:flex-wrap md:border"
                  >
                    <div className="flex items-center w-[95%] gap-10 md:flex-col">
                      <div className="main flex items-center  gap-20">
                        <Link  to={`/product/${item.id}`} className="md:w-32">
                          <Img
                            src={item.img}
                            alt="product image"
                            className={
                              "w-20 h-20 object-contain rounded-[8px] shadow-[5px_4px_13px_0_rgba(145,145,145,0.3)] "
                            }
                          />
                        </Link>
                        <button
                          className="p-5 text-2xl text-[#A5A5A5] hidden hover:text-red-700 transition-all duration-150 ease-in-out md:block"
                          onClick={() => {
                            handleRemoveItem(item.id, item.title);
                          }}
                        >
                          <IoIosClose />
                        </button>
                      </div>
                      <div className="flex items-center gap-11">
                        <h2 className="font-bold text-[18px] text-darkBlue hidden md:block">
                          Product:
                        </h2>
                        <Link  to={`/product/${item.id}`}>
                          <h3 className="text-[18px] text-darkBlue font-bold transition-all duration-200 ease-in-out hover:text-blue ">
                            {item.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center  w-full justify-around md:flex-col">
                      <div className="parent flex items-center justify-between w-[48%] md:flex-col">
                        <div className="flex items-center text-start  justify-start  self-end md:gap-[130px]">
                          <h2 className="font-bold text-[18px] text-darkBlue hidden md:block ">
                            Price:
                          </h2>
                          <p className="text-blue font-semibold text-[16px]">
                            $
                            {item.price
                              ? Number(item.price).toFixed(2)
                              : "0.00"}
                          </p>
                        </div>
                        <div className="flex items-center text-start  justify-start self-end md:gap-[59px]">
                          <h2 className="font-bold text-[18px] text-darkBlue hidden md:block ">
                            Quantity:
                          </h2>
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
                      </div>
                      <div className="flex items-center  self-center  md:pl-6  md:w-full md:gap-24 md:justify-around">
                        <h2 className="font-bold text-[18px] text-darkBlue hidden md:block ">
                          Subtotal:
                        </h2>
                        <div className="parent2 flex items-center w-[100%]  justify-between ">
                          <p className="text-blue font-semibold whitespace-nowrap text-[16px] slg:text-[14px] slg:whitespace-nowrap">
                            {item.quantity} × $
                            {calculateItemSubtotal(item).toFixed(2)}
                          </p>
                          <button
                            className="p-5 text-xl text-[#A5A5A5] hover:text-red-700 transition-all duration-150 ease-in-out md:hidden"
                            onClick={() => {
                              handleRemoveItem(item.id, item.title);
                            }}
                          >
                            <IoIosClose />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="parent flex mt-10">
                <div className="w-full md:hidden"></div>
                <div className="sticky top-[80px] md:pt-0 flex flex-col min-w-[350px] md:justify-center md:items-center md:min-w-0 md:w-full">
                  <div className="shadow-xl p-4 bg-white rounded-[16px] py-10 px-10 flex flex-col gap-2 md:w-full">
                    <h6 className="font-semibold text-[24px] text-darkBlue">
                      Cart Totals
                    </h6>
                    <hr className="text-[#e5e5e5]" />
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-5">
                        <p className="font-bold text-darkBlue">Subtotal</p>
                        <p className="font-medium text-blue">${totalPrice}</p>
                      </div>
                      <div></div>
                      <div></div>
                      <div className="flex gap-5">
                        <p className="font-bold text-darkBlue">Total</p>
                        <p className="font-medium text-blue">
                          ${totalPrice + delivery}
                        </p>
                      </div>{" "}
                      <br />
                      <Link
                        onClick={handleClick}
                        to={"/checkout"}
                        className="bg-blue border text-center font-semibold border-blue transition-all duration-300 ease-in-out text-white py-3 px-4 rounded-md flex-grow hover:text-blue hover:bg-white"
                      >
                        Proceed To Checkout
                      </Link>
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
