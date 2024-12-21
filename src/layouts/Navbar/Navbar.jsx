import HeaderLink from "../../ui/HeaderLink";

function Navbar() {
  return (
    <>
      <div className="flex gap-[10px] items-center cursor-pointer md:hidden">
        <HeaderLink to={"/"}>Home</HeaderLink>
        <HeaderLink to={"/page"}>Doctors</HeaderLink>
        <HeaderLink to={"/products"}>Shop</HeaderLink>
        <HeaderLink to={"/contact"}>Contacts</HeaderLink>
      </div>
    </>
  );
}

export default Navbar;
