import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {  Link } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import PriceFilter from "../../components/PriceFilter/PriceFilter";
import BestSellers from "../../components/BestSellers/BestSellers";
import Tags from "../../components/Tags/Tags";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import CardGrid from "../../components/CardGrid/CardGrid";
import useAOS from "../../hooks/useAOS";
import { BestSellersData } from "../../assets/datas/datas";
import Categories from "../../components/Categories/Categories";
import FormShop from "../../components/Form/FormShop";

function ProductsPage({ cardData, categories }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  useAOS();

  const handleAddToCart = (item) => {
    const formattedItem = {
      ...item,
      price: parseFloat(item.price.replace("$", "")),
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, formattedItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const filteredCards = cardData.filter((card) => {
    const cardCategory = card.category ? card.category.toLowerCase() : "";
    const selectedTagLowerCase = selectedTag.toLowerCase();

    return cardCategory === selectedTagLowerCase || selectedTag === "All";
  });

  return (
    <>
      <div className="cart-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Shop
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
                  className="current opacity-[1] text-darkBlue "
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="sidebar-main mx-[-15px]">
            <div className="products-sidebar-right float-right">
              <div className="top flex justify-between content-center items-center w-full">
                <p className="inline w-[50%] text-[16px] text-[#79859c] font-medium">
                  Showing 1–9 of {filteredCards.length} results
                </p>
                <DropDown />
              </div>
              <div className="bottom mt-[10px] clear-both">
                <CardGrid
                  cardData={cardData}
                  filteredCards={filteredCards}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </div>
            <div className="min-h-screen">
              <div className="sticky-sidebar-left float-left w-[27%] flex flex-col justify-center items-center sticky top-0">
                <FormShop/>
                <Categories />
                <PriceFilter />
                <BestSellers BestSellersData={BestSellersData} />
                <Tags
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  cardData={cardData}
                />
                <ShoppingCart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}

export default ProductsPage;
