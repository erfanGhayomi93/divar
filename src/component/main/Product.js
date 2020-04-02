import React from "react";
import { Link } from "react-router-dom";
import noPicture from "./images/no-picture.png";


export default function Product({ value }) {

  return (
    <div className="product" data-aos="fade-up" >
      <Link to={`/${value.data.token}`}>
        <article className="item">
          <p className="title">{value.data.title}</p>
          <p className="price">{value.data.description}</p>
          <p className="info">{value.data.normal_text}</p>
        </article>
        <article className="img">
          <img src={value.data.image ? value.data.image : noPicture} alt="" />
        </article>
      </Link>
    </div>
  );
}