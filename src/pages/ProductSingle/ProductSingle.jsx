import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbStarFilled } from "react-icons/tb";

function ProductSingle({ initialCardData, images }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState(initialCardData);
  const product = cardData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [activeImage, setActiveImage] = useState(0);

  const updateItemQuantity = (id, newQuantity) => {
    const updatedCart = cardData.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCardData(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="cart-page flex bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper flex">
          <div className="max-w-[1170px] w-[100%] mx-auto px-[100px]">
            <div className="content flex flex-col justify-end items-center h-[100%] px-10 w-[100%]">
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link
                  to={"/products"}
                  className="opacity-70 text-darkBlue text-[15px]"
                >
                  Shop
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link
                  to={"/products"}
                  className="current opacity-70 text-darkBlue text-[15px]"
                >
                  Stethoscope
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue text-[15px]">
                  {product.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-single">
        <div className="container">
          <div className="main flex justify-between">
            {" "}
            <div className="left">
              <div className="card w-[540px] rounded-[15px] shadow-[11px_9px_35px_0_rgba(54,54,54,0.08)] overflow-hidden">
                <div className="product-image">
                  <InnerImageZoom
                    src={product.img}
                    zoomSrc={product.img}
                    alt={product.title}
                    zoomScale={1.5}
                    className="w-full h-full object-cover"
                    zoomType="hover"
                  />
                </div>
              </div>
              {
                <div className="mt-5 flex gap-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all
               ${activeImage === index ? "border-blue" : "border-transparent"}`}
                    >
                      <img
                        src={Object.values(image)[0]} // Access the first value in the object
                        alt={`Product thumbnail ${index + 1}`}
                        className={`w-full h-full object-cover transition-opacity
               ${
                 activeImage === index
                   ? "opacity-100"
                   : "opacity-70 hover:opacity-100"
               }`}
                      />
                    </button>
                  ))}
                </div>
              }
            </div>
            <div className="right w-[48%]">
              <div className="product-details">
                <h1 className="product-title text-[42px] text-darkBlue font-semibold">
                  {product.title}
                </h1>
                <div className="flex items-center gap-3">
                  <Link
                    onClick={handleClickTop}
                    to={`/product/${product.id}`}
                    className="start-icon flex text-[#FF9E21] gap-[3px] text-[16px] my-[10px]"
                  >
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled />
                    <TbStarFilled className="text-[#CFC8D8]" />
                  </Link>
                  <span className="text-[13px] text-[#3B4973]">
                    (1 customer review)
                  </span>
                </div>
                <div className="price-main flex items-center gap-2 mt-2">
                  <p className="line-through text-[16px] text-[#a5a5a5]">
                    $ 98.90
                  </p>
                  <p className="product-price text-[24px] text-blue font-bold">
                    {product.price
                      ? `$ ${product.price}`
                      : "Price not available"}
                  </p>
                </div>
                <div className="short-description text-[#3B4964] mt-4">
                  <p className="product-description text-[16px] text-[#3B4973] m-[0_0_15px]">
                    {product.description || "No description available"}
                  </p>
                  <ul>
                    <li className="flex items-center text-[16px] gap-[16px] py-[6px]">
                      <span className="text-[21px] text-lightBlue">
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      Comfortable Snap-Tight soft seal eartips reduce ambient
                      noise.{" "}
                    </li>
                    <li className="flex items-center text-[16px] gap-[16px] py-[6px]">
                      <span className="text-[21px] text-lightBlue">
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      Tubes and a rugged headset reliably withstand a million
                      bends.{" "}
                    </li>
                    <li className="flex items-center text-[16px] gap-[16px] py-[6px]">
                      <span className="text-[21px] text-lightBlue">
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      Key diagnostic aid in the process of physical patient
                      assessments.{" "}
                    </li>
                  </ul>
                </div>
                <div className="font-semibold mt-2 text-[#e4e4e4]">
                  _________
                </div>
                <div className="product-meta flex flex-col gap-3 mt-5">
                  <span className="flex items-center gap-1">
                    <b className="text-darkBlue">SKU:</b>
                    <p className="text-[#3b4964] text-[17px] font-bold">
                      {product.title}
                    </p>
                  </span>
                  <span className="flex items-center gap-1">
                    <b className="text-darkBlue">Category:</b>
                    {product.categories.map((category, index) => (
                      <span
                        key={index}
                        className="text-[#3b4964] text-[16px] font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </span>
                  <span className="flex items-center gap-1">
                    <b className="text-darkBlue">Tags:</b>
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[#3b4964] text-[16px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="bottom gap-[24px] mt-[90px] flex">
                  <div className="flex items-center justify-center ">
                    <div
                      className="btn border border-[#E5E5E5] px-2.5 rounded-full text-xl"
                      onClick={() =>
                        updateItemQuantity(
                          product.id,
                          Math.max(1, product.quantity - 1) // Prevent negative quantities
                        )
                      }
                    >
                      <button className="text-[20px] font-medium text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                        -
                      </button>
                    </div>
                    <p className="w-8 items-center justify-center mx-auto flex text-darkBlue font-bold">
                      {product.quantity}
                    </p>
                    <div
                      className="btn border border-[#E5E5E5] px-2 rounded-full text-xl"
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity + 1)
                      }
                    >
                      <button className="text-[20px] font-medium text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                        +
                      </button>
                    </div>
                  </div>
                  <Link
                    onClick={handleClickTop}
                    to={"/cart"}
                    className="bg-lightBlue text-center font-semibold border transition-all duration-300 ease-in-out border-lightBlue text-white py-3 px-8 rounded-md  hover:text-lightBlue hover:bg-white"
                  >
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSingle;
