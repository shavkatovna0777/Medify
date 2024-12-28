import React from "react";
import {
  ChevronRight,
  X,
  Home,
  FileText,
  ShoppingBag,
  Contact,
} from "lucide-react";
import Img from "../../components/LazyLoadImg/Img";
import { useNavigate, useLocation } from "react-router-dom";

const ResponsiveNavbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "Home", icon: <Home size={20} />, path: "/" },
    { title: "Pages", icon: <FileText size={20} />, path: "/page" },
    { title: "Shop", icon: <ShoppingBag size={20} />, path: "/products" },
    { title: "Contacts", icon: <Contact size={20} />, path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-[rgba(49,49,49,0.8)] bg-opacity-[1] transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full bg-[#313131] text-white transition-all duration-300 z-50 ${
          isOpen ? "w-[50%] md:w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Img
              className="h-12 object-contain slg:block slg:place-items-center"
              src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/logo02.png"
              alt=""
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item, index) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));

            return (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-800 ${
                  isActive ? "border-l-4 border-cyan-400 bg-gray-800" : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={isActive ? "text-lightBlue" : "text-gray-400"}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={isActive ? "text-lightBlue" : "text-gray-300"}
                  >
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className={`${isActive ? "text-lightBlue" : "text-gray-400"}`}
                />
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
