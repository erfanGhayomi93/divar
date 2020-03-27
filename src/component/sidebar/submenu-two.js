import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../context";

export default function SubmenuTwo({ content }) {
  const {clickedFilter} = useContext(context);
  return (
    <div>
      <p className="text-muted">
        <Link onClick={() => clickedFilter("")} to={"/"}>
          همه آگهی ها
        </Link>
      </p>

      <div>
        <p className="active-item pr-2">{content.title.name}</p>

        <ul className="submenu-2">
          {content.item.map((data, ind) => (
            <li key={ind}>
              <Link
                onClick={() => clickedFilter(data.route)}
                to={`/${data.route}`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
