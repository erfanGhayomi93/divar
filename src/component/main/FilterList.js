import React, { useContext } from "react";
import Filter from "./Filter";
import context from "./../../context";
import HandleRouteFilter from "./HandleRouteFilter";


export default function FilterList() {
  const contextConsumer = useContext(context);
  const { data } = contextConsumer;
  return (
    <div className="filter-list">
      {data.res.suggestion_list
        ? data.res.suggestion_list.map((item, index) => (
            <Filter
              key={index}
              name={item}
              clickedButton={category =>
                contextConsumer.clickedFilter(category)
              }
            />
          ))
        : ""}

      <HandleRouteFilter />
    </div>
  );
}
