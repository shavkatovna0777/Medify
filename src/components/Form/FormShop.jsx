import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function FormShop() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
      };
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full justify-center max-w-[235px] mb-[20px] items-center pl-4 bg-[#f6f6f6] rounded-[5px] overflow-hidden relative z-[1]"
    >
      <input
        type="text"
        placeholder={"Search products..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="outline-none w-full h-full bg-transparent"
      />
      <button
        type="submit"
        className="w-12 h-12 flex items-center justify-center bg-blue text-white border-none"
      >
        <IoSearch className="text-[25px]" />
      </button>
    </form>
  );
}

export default FormShop;
