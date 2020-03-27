import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import context from "../../context";

export default function SubmenuThree({ content, status }) {
  const {clickedFilter } = useContext(context);

  return (
    <div>
      <p className="text-muted">
        <Link onClick={() => clickedFilter("")} to={"/"}>
          همه آگهی ها
        </Link>
      </p>

      <div>
        <p className="pr-2 text-muted">
          <Link
            onClick={() =>
              clickedFilter(content.title.routeOne)
            }
            to={`/${content.title.routeOne}`}
          >
            {content.title.subMenuOneName}
          </Link>
        </p>

        {status === "END-LEVEL" ? (
          <p className="pr-3 text-muted">
            <Link
              onClick={() =>
                clickedFilter(content.title.routeTwo)
              }
              to={`/${content.title.routeTwo}`}
            >
              {content.title.subMenuTwoName}
            </Link>
          </p>
        ) : (
          <p className="active-item pr-3">{content.title.subMenuTwoName}</p>
        )}

        <ul className="submenu-3">
          {content.item.map((data, ind) => (
            <li key={ind}>
              <NavLink
                onClick={() => clickedFilter(data.route)}
                activeClassName="border-color active-item"
                to={`/${data.route}`}
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
