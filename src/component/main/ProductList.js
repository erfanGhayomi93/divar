import React, { useContext } from "react";
import Product from "./Product";
import context from "./../../context";
import Loading from "../Loading";

export default function ProductList({isSearch}) {
  const { data } = useContext(context);

  return (
    <div className="product-list">
      <div className="seo_details">
        {data.res.seo_details ? data.res.seo_details.title : ""}
      </div>
      
      {!data.loading ? (
        data.res.widget_list
          .filter(item => {
            if (isSearch === null || !isSearch.length) return true;

            if (item.data.title.includes(isSearch)) return true;

            if (item.data.normal_text.includes(isSearch)) return true;

            return false;
          })
          .map((product, index) => <Product key={index} value={product} />)
      ) : (
        <Loading />
      )}
    </div>
  );
}
