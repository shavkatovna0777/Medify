import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Home from "./pages/Home/Home";
import Main from "./layouts/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { cardData, categories, doctorData, images } from "./assets/datas/datas";
import Cart from "./pages/Cart/Cart";
import { Checkout, ProductSingle } from "./pages";
import DoctorsSingle from "./pages/DoctorsSingle/DoctorsSingle";

function App() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  useEffect(() => {
    console.log("Loaded cartItems from localStorage: ", cartItems);
  }, [cartItems]);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Updated cartItems in localStorage: ", cartItems);
    }
  }, [cartItems]);
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    console.log("Item added to cart: ", item);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "page/*",
          element: <DoctorsPage doctorData={doctorData} />,
        },
        {
          path: "page/:id",
          element: <DoctorsSingle/>,
        },
        {
          path: "products/*",
          element: (
            <ProductsPage
              cardData={cardData}
              categories={categories}
              handleAddToCart={handleAddToCart}
            />
          ),
        },
        {
          path: "cart",
          element: (
            <Cart
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
              updateItemQuantity={updateItemQuantity}
            />
          ),
        },
        {
          path: "checkout",
          element: <Checkout cartItems={cartItems} />,
        },
        {
          path: "product/:id",
          element: (
            <ProductSingle
              initialCardData={cardData}
              images={images}
              handleRemoveItem={handleRemoveItem}
              updateItemQuantity={updateItemQuantity}
            />
          ),
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
