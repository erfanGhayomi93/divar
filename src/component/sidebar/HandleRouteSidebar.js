import React from "react";
import { Switch, Route } from "react-router-dom";
import SubmenuOne from "./submenu-one";
import SubmenuTwo from "./submenu-two";
import { dataSubmenuTwo, dataSubmenuThree } from "./data";
import SubmenuThree from "./submenu-three";

export default function HandleRouteSidebar() {  
  return (
    <div className="aside">
      <p className="title">دسته بندی ها</p>
      <Switch>
        <Route path={`/`} exact>
          <SubmenuOne />
        </Route>

        {Object.keys(dataSubmenuTwo).map((data, ind) => (
          <Route key={ind} path={`/${dataSubmenuTwo[data].title.route}`} exact>
            <SubmenuTwo content={dataSubmenuTwo[data]} />
          </Route>
        ))}

        {Object.keys(dataSubmenuThree).map((data, ind) => (
          <Route
            key={ind}
            path={`/${dataSubmenuThree[data].title.routeTwo}`}
            exact
          >
            <SubmenuThree content={dataSubmenuThree[data]} />
          </Route>
        ))}

        {Object.keys(dataSubmenuThree).map((data, ind) =>
          dataSubmenuThree[data].item.map(auth => (
            <Route key={ind} path={`/${auth.route}`} exact>
              <SubmenuThree
                content={dataSubmenuThree[data]}
                status="END-LEVEL"
              />
            </Route>
          ))
        )}

      </Switch>
    </div>
  );
}
