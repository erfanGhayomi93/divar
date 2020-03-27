import React from "react";
import Search from "./Search";
import FilterList from "./FilterList";

export default function FilterAndSearch({handleSearch}) {
  return (
    <div>
      <Search handleSearch = {(value) => handleSearch(value)}/>
      
      <FilterList />
    </div>
  );
}
