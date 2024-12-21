import { useState } from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import HeaderSticky from "./HeaderSticky";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header >
      <HeaderTop />
      <HeaderBottom/>
      <HeaderSticky/>
    </header>
  );
}

export default Header;
