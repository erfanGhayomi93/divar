import React from "react";
import { Switch, Route } from "react-router-dom";

const categories = [
  "car",
  "buy-apartment",
  "rent-apartment",
  "mobile-phones",
  "sofa-armchair",
  "pets-animals",
  "personal-goods",
  "services",
  "jobs",
  "tv-projector"
];

export default function HandleRouteFilter() {

  return (
    <div>
      <Switch>
        {categories.map((catogory, index) => (
          <Route path={`/${catogory}`} key={index} />
        ))}
      </Switch>
    </div>
  );
}
