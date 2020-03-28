import React, { useContext } from "react";
import Start from "./Start";
import { Route, Switch } from "react-router-dom";
import Menu from "./header/Menu";
import DetailProducts from "./main/DetailProducts";
import context from "./../context";

export default function HandleRouteStart() {
  const { data } = useContext(context);
  
  return (
    <div className="wrapper">
      <header className="header">
        <Menu />
      </header>

      <Switch>
        {data.res.widget_list ? data.res.widget_list.map((product ,ind) => (
          <Route path={`/${product.data.token}`} key={ind} exact>
            <DetailProducts  data = {product.data}/>
          </Route>
        )) : ""}

        <Route path={`/`}>
          <Start />
        </Route>
      </Switch>
    </div>
  );
}
