import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { Star } from "lucide-react";
import { features } from "../../assets/datas/datas";

function ProductSingle({ initialCardData, images }) {
  const { id } = useParams();
  const [cardData, setCardData] = useState(initialCardData);
  const product = cardData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [activeImage, setActiveImage] = useState(0);
  const getRandomRating = () => {
    return Math.floor(Math.random() * 2) + 3;
  };

  const renderStarRating = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
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
          <div className="max-w-[1170px] w-[100%] mx-auto px-[100px] md:px-2">
            <div className="content flex flex-col justify-end items-center h-[100%] px-10 w-[100%] md:px-0">
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
          <div className="main flex justify-between md:flex-wrap">
            <div className="left w-[540px]">
              <div className="card rounded-[15px]  shadow-[11px_9px_35px_0_rgba(54,54,54,0.08)] overflow-hidden slg:w-[400px] md:w-full">
                <div className="product-image ">
                  <InnerImageZoom
                    src={product.img}
                    zoomSrc={product.img}
                    alt={product.title}
                    zoomScale={1.5}
                    className="w-full h-full object-cover "
                    zoomType="hover"
                  />
                </div>
              </div>
              {
                <div className="mt-5 flex gap-4 overflow-auto scrollbar-none">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative  w-[calc((100%-64px)/5)] md:w-[calc((100%-48px)/4)] flex-shrink-0 md:aspect-square md:h-auto border rounded-lg overflow-hidden 2 transition-all
               ${activeImage === index ? "border-blue" : "border-transparent"}`}
                    >
                      <img
                        src={image.img}
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
            <div className="right w-[48%] md:w-full">
              <div className="product-details md:mt-5">
                <h1 className="product-title text-[42px] text-darkBlue font-semibold md:whitespace-nowrap md:text-[30px]">
                  {product.title}
                </h1>
                <div className="flex items-center gap-3">
                  {renderStarRating(getRandomRating())}
                  <span className="text-[13px] text-[#3B4973] md:whitespace-nowrap">
                    (1 customer review)
                  </span>
                </div>
                <div className="price-main flex items-center gap-2 mt-2">
                  <p className="line-through text-[16px] text-[#a5a5a5]">
                    $ 108.90
                  </p>
                  <p className="product-price text-[24px] text-blue font-bold">
                    {product.price
                      ? `$ ${product.price}`
                      : "Price not available"}
                  </p>
                </div>
                <div className="short-description text-[#3B4964] mt-4 md:w-full max-w-full ">
                  <p className="product-description text-[16px] text-[#3B4973] m-[0_0_15px] md:w-full md:m-0 ">
                    {product.description || "No description available"}
                  </p>
                  <ul className="md:w-full">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[16px] gap-[16px] py-[6px]"
                      >
                        <span className="text-[21px] text-lightBlue">
                          <IoMdCheckmarkCircleOutline />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="font-semibold mt-2 text-[#e4e4e4] md:hidden">
                  _________
                </div>
                <div className="product-meta flex flex-col gap-3 mt-5 ">
                  <span className="flex items-center gap-1">
                    <b className="text-darkBlue">SKU:</b>
                    <p className="text-[#3b4964] text-[17px] font-bold md:whitespace-nowrap">
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
                <div className="bottom gap-[24px] mt-[90px] flex md:mt-4">
                  <div className="flex items-center justify-center ">
                    <div
                      className="btn border-[#E5E5E5] px-3.5 py-0.5 rounded-full text-xl border"
                      onClick={() =>
                        updateItemQuantity(
                          product.id,
                          Math.max(1, product.quantity - 1)
                        )
                      }
                    >
                      <button className="text-[28px] font-medium text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                        -
                      </button>
                    </div>
                    <p className="w-10 items-center justify-center mx-auto flex text-darkBlue font-bold text-[20px]">
                      {product.quantity}
                    </p>
                    <div
                      className="btn border-[#E5E5E5] px-2.5 py-0.5 rounded-full text-xl border"
                      onClick={() =>
                        updateItemQuantity(product.id, product.quantity + 1)
                      }
                    >
                      <button className="text-[28px] font-medium text-blue hover:text-darkBlue transition-all duration-300 ease-in-out">
                        +
                      </button>
                    </div>
                  </div>
                  <Link
                    onClick={handleClickTop}
                    to={"/cart"}
                    className="bg-lightBlue hover:bg-blue text-center font-semibold transition-all duration-300 ease-in-out lightBlue text-white py-4 px-12 rounded-md  hover:text-white md:whitespace-nowrap"
                  >
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts currentProductId={product.id} products={cardData} />
        </div>
      </div>
    </>
  );
}

export default ProductSingle;
