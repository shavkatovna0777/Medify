import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Img from "../LazyLoadImg/Img";
import { toast, Bounce } from "react-toastify";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("Loaded cartItems from localStorage:", savedCart);
    setCartItems(savedCart); // Initialize state from localStorage
  }, []); // This effect runs only once on mount
  
  
  useEffect(() => {
    // Save cart to localStorage every time the cartItems state changes
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );
  const addToCart = (cardData) => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Check if product already exists in the cart
    const existingProduct = savedCart.find(item => item.id === cardData.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if product is already in the cart
    } else {
      savedCart.push({ ...cardData, quantity: 1 }); // Otherwise, add new product
    }
  
    localStorage.setItem("cartItems", JSON.stringify(savedCart));
    setCartItems(savedCart); // Update state to trigger re-render
  };
  const handleRemoveItem = (id, title) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    toast.error(`${title} removed from the cart!`, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col mb-10 items-center justify-start h-auto p-4 w-80 bg-gray-100 rounded-lg">
        <div className="top flex flex-col items-center justify-center mb-4">
          <h3 className="text-[16px] font-bold uppercase text-darkBlue">
            Shopping Cart
          </h3>
          <div className="text-orange h-4 font-bold mb-[10px] cursor-default">
            __
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div className="w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-[15px] items-start mb-4 p-2 bg-white rounded justify-center"
              >
                <Link onClick={handleClick}  to={`/product/${item.id}`}>
                  <Img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-[8px] shadow-[5px_4px_13px_0_rgba(145,145,145,0.3)]"
                  />
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Link onClick={handleClick}  to={`/product/${item.id}`}>
                      <h4 className="font-medium text-darkBlue whitespace-nowrap text-[15px] transition-all duration-300 ease-in-out hover:text-lightBlue">
                        {item.title}
                      </h4>
                    </Link>
                    <button
                      className="font-bold text-gray text-[20px] hover:text-red-700 transition-all duration-300 ease-in-out"
                      onClick={() => handleRemoveItem(item.id, item.title)}
                    >
                      <IoIosClose />
                    </button>
                  </div>
                  <span className="font-medium text-[14px] text-blue">
                    {item.quantity} × $
                    {item.price ? Number(item.price).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>
            ))}

            <div className="text-center font-bold text-darkBlue mt-4 text-[18px]">
              Subtotal:{" "}
              <span className="text-blue">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray cursor-default">No products in the cart.</p>
        )}
        {cartItems.length > 0 && (
          <div className="flex flex-col gap-2 mt-6 w-full">
            <Link
              onClick={handleClick}
              to={"/cart"}
              className="bg-lightBlue text-center font-semibold border transition-all duration-300 ease-in-out border-lightBlue text-white py-3 px-4 rounded-md flex-grow hover:text-lightBlue hover:bg-white"
            >
              View Cart
            </Link>
            <Link
              onClick={handleClick}
              to={"/checkout"}
              className="bg-blue border text-center font-semibold border-blue transition-all duration-300 ease-in-out text-white py-3 px-4 rounded-md flex-grow hover:text-blue hover:bg-white"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
