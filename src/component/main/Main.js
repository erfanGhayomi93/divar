import React, { useState } from "react";
import FilterAndSearch from "./FilterAndSearch";
import ProductList from "./ProductList";

export default function Main() {
  const [valueSearch, setValueSearch] = useState(null);

  const handleSearch = value => {
    setValueSearch(value);
  };

  return (
    <div>
      <FilterAndSearch handleSearch={handleSearch} />

      <ProductList isSearch = {valueSearch}/>
    </div>
  );
}
