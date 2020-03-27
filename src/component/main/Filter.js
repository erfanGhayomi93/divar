import React from "react";
import { Link } from "react-router-dom";

export default function Filter(props) {
  const { value } = props.name.value.category;

  const category =
    value === "light"
      ? "car"
      : value === "apartment-sell"
      ? "buy-apartment"
      : value === "apartment-rent"
      ? "rent-apartment"
      : value === "mobile-phones"
      ? "mobile-phones"
      : value === "sofa-armchair"
      ? "sofa-armchair"
      : value === "animals"
      ? "pets-animals"
      : value === "personal"
      ? "personal-goods"
      : value === "services"
      ? "services"
      : value === "jobs"
      ? "jobs"
      : value === "tv-projector"
      ? "tv-projector"
      : "";

  return (
    <span className="customButton">
      <Link onClick={() => props.clickedButton(category)} to={`/${category}`}>
        {props.name.displayed_text}
      </Link>
    </span>
  );
}
