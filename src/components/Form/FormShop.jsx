import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function FormShop({ products, filteredResult }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      filteredResult([]);
      return;
    }
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    filteredResult(results);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full justify-center max-w-[235px] mb-5 items-center pl-4 bg-[#f6f6f6] rounded-md overflow-hidden relative slg:max-w-full"
    >
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="outline-none w-full h-full bg-transparent  "
      />
      <button
        type="submit"
        className="w-12 h-12 flex items-center justify-center bg-blue text-white"
      >
        <IoSearch className="text-2xl" />
      </button>
    </form>
  );
}

export default FormShop;
