import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../context";
import { menu } from "./data";

export default function SubmenuOne() {
  const {clickedFilter } = useContext(context);

  return (
    <ul className="submenu-1">
      {menu.map((item, ind) => (
        <li key={ind}>
          <img src={item.iconUrl} alt={item.name} />
          <Link
            onClick={() => clickedFilter(item.route)}
            to={`/${item.route}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
