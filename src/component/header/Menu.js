import React, { useContext } from "react";
import divar from "./divar.jpeg";
import { MdKeyboardArrowDown } from "react-icons/md";
import context from "./../../context";
import { Link } from "react-router-dom";

export default function Menu() {
  const { handleCity, clickedFilter } = useContext(context);
  
  return (
    <nav className="menu">
      <div className="item">
        <div className="button-free">
          <span>ثبت رایگان آگهی</span>
        </div>
        <div className="menuSite">
          <ul>
            <li>دیوار من</li>
            <li>چت</li>
            <li>درباره ما</li>
            <li>بلاگ</li>
            <li>پشتیبانی و قوانین</li>
            <li>تماس با ما</li>
            <li>خروج</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="location" onClick={() => handleCity(true)}>
          <span>
            <MdKeyboardArrowDown />
          </span>
          <span>تهران</span>
        </div>
        <span className="logo ml-2">
          <Link to="/" onClick={() => clickedFilter("")}>
            <img src={divar} alt="" />
          </Link>
        </span>
      </div>
    </nav>
  );
}
