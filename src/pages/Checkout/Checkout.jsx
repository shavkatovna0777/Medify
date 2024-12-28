import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoIosArrowForward,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Checkout() {
 
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="cart-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Checkout
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
                <span className="current opacity-[1] text-darkBlue ">
                  Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer h-[40px]"></div>
      <section className="">
        <div className="container ">
          <div className="parent flex  justify-between md:flex-wrap">
            <div className="left flex flex-col w-full slg:w-[50%] md:w-full">
              <div className="top w-full">
                <h1 className="mb-[30px] text-[36px] text-darkBlue font-bold leading-[54px] slg:text-[30px]">
                  Billing details
                </h1>
              </div>
              <div className="center flex flex-col gap-4  h-[110vh] slg:h-[65vh] md:h-[100vh] mt-[-6px] rounded-[5px] shadow-[11px_8px_35px_0_rgba(49,49,49,0.08)] p-[15px_20px]">
                <div className="main flex items-center justify-between">
                  <div className="name-input  slg:w-40 slg:mr-8">
                    <div className="m-[6px_0_12px]">
                      <span className=" text-[16px] text-darkBlue font-medium">
                        First name *
                      </span>
                    </div>
                    <input
                      type="text"
                      className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px] slg:w-full"
                    />
                  </div>
                  <div className="lastName-input slg:w-40">
                    <div className="m-[6px_0_12px]">
                      <span className=" text-[16px] text-darkBlue font-medium">
                        Last name *
                      </span>
                    </div>
                    <input
                      type="text"
                      className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px] slg:w-full"
                    />
                  </div>
                </div>
                <div className="companyName-input w-full flex flex-col">
                  <div className="m-[6px_0_12px]">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Company name (optional){" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                  />
                </div>
                <div className="country-input flex flex-col">
                  <div className="m-[6px_0_12px]">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Country / Region *
                    </span>
                  </div>{" "}
                  <select
                    name=""
                    id=""
                    className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                  >
                    <option value="">Jizzakh</option>
                    <option value="">Syrdarya</option>
                    <option value="">Tashkent</option>
                    <option value="">Bukhara</option>
                    <option value="">Fergana </option>
                    <option value="">Khorezm </option>
                    <option value="">Namangan</option>
                    <option value="">Navoi </option>
                    <option value="">Samarkand </option>
                  </select>
                </div>
                <div className="street-input flex flex-col">
                  <div className="m-[6px_0_12px]">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Street address *
                    </span>
                  </div>
                  <div className="main flex flex-col gap-3">
                    <input
                      type="text"
                      className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                      placeholder="House number and street name"
                    />
                    <input
                      type="text"
                      className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                      placeholder="Apartment, suit, unit, etc. (optional)"
                    />
                  </div>
                </div>
                <div className="city-input w-full flex flex-col">
                  <div className="m-[6px_0_12px]">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Town / City *
                    </span>
                  </div>
                  <input
                    type="text"
                    className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                  />
                </div>
                <div className="phone-input w-full flex flex-col">
                  <div className="m-[6px_0_12px]">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Phone *
                    </span>
                  </div>
                  <input
                    type="text"
                    className="bg-[#f6f7fa] p-[10px_20px] outline-none rounded-[5px]"
                  />
                </div>
              </div>
              <div className="bottom flex flex-col slg:pl-5 md:pl-3">
                <div className="heading flex flex-col">
                  <div className="top w-full slg:whitespace-nowrap ">
                    <h1 className=" text-[36px] text-darkBlue font-bold leading-[54px] slg:text-[25px]">
                      Additional information
                    </h1>
                  </div>
                  <div className="mb-3">
                    <span className=" text-[16px] text-darkBlue font-medium">
                      Order notes (optional)
                    </span>
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  className="rounded-[5px] outline-none w-full h-[145px] bg-[#f6f7fa] p-[10px_20px]"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </div>
            <div className="right flex flex-col  w-full">
              <div className="top slg:pl-10 md:pl-3">
                <h1 className="mb-[24px] md:mb-[15px] text-[36px] text-darkBlue font-bold leading-[54px] slg:text-[30px]">
                  Your order
                </h1>
              </div>
              <div className="center px-10 md:px-3">
                <div className="flex justify-between bg-lightBlue py-2.5 px-3 text-white rounded-[5px]">
                  <h3 className="text-lg font-medium">Product</h3>
                  <h3 className="text-lg font-medium ">Subtotal</h3>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-5 px-4 border-b border-[#EFEFEF]"
                  >
                    <span className="text-darkBlue font-medium text-[14px]">
                      {item.title}{" "}
                      <span className="text-[#3b4964] font-normal text-[15px] opacity-[0.6]">
                        × {item.quantity}
                      </span>
                    </span>
                    <span className="text-blue font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div>
                  <div className="flex justify-between px-4 py-3 border-b border-[#EFEFEF]">
                    <span className="font-bold text-darkBlue">Subtotal</span>
                    <span className="font-medium text-blue">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between px-4 py-3 border-b border-[#EFEFEF]">
                    <span className="font-bold text-darkBlue">Total</span>
                    <span className="font-medium text-blue">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="main mt-7">
                  <div className="mx-10 md:mx-3">
                    <div className="flex rounded-[5px] items-center py-4 px-2 space-x-3 mb-[20px] shadow-[11px_8px_35px_0_rgba(49,49,49,0.08)]">
                      <span className="p-1.5 rounded-md bg-lightBlue ">
                        <IoIosInformationCircleOutline className="text-[40px] text-white" />
                      </span>{" "}
                      <p className="text-darkBlue text-[15px]">
                        Sorry, it seems that there are no available payment
                        methods. Please{" "}
                        <Link
                          to={"/contact"}
                          className="text-blue-500 underline"
                        >
                          contact us
                        </Link>{" "}
                        if you need assistance.
                      </p>
                      <button className="p-3">
                        <AiOutlineClose className="text-[20px] text-[#D2D2D2] transition-all ease-out duration-300 hover:text-darkBlue" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center mx-auto justify-center mb-1 slg:px-10 slg:mb-4 md:px-3">
                    <p className="text-darkBlue">
                      Your personal data will be used to process your order,
                      support <br /> your experience throughout this website,
                      and for other purposes <br /> described in our privacy
                      policy.
                    </p>
                  </div>

                  <div className="btn flex mx-10">
                    <div className="w-full"></div>
                    <button
                      disabled
                      className="whitespace-nowrap text-white bg-blue py-3 px-10 rounded-[5px] cursor-pointer font-bold border border-blue hover:text-blue hover:bg-white transition-all duration-300 ease-in-out"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </section>
    </>
  );
}

export default Checkout;
