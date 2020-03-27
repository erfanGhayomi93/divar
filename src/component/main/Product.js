import React from "react";
import { Link } from "react-router-dom";

export default function Product({ value }) {
  return (
    <div className="product" >
      <Link to="/test">
        <article className="item">
          <p className="title">{value.data.title}</p>
          <p className="price">{value.data.description}</p>
          <p className="info">{value.data.normal_text}</p>
        </article>
        <article className="img">
          <img src={value.data.image} alt="" />
        </article>
      </Link>
    </div>
  );
}
