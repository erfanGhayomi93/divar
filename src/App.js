import React, { useState, useEffect } from "react";
import context from "./context";
import "./App.css";
import Start from "./component/Start";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cities from "./component/Cities";

function App() {
  const [modalCity, setModalCity] = useState(false);
  const [data, setData] = useState({
    res: {},
    loading: true,
    city: "tehran"
  });

  useEffect(() => {
    const url = `https://api.divar.ir/v8/web-search/tehran`;
    forwardRequest(url);
  }, []);

  const forwardRequest = url => {
    setData({ ...data, loading: true });
    axios.get(url).then(
      response => {
        setData({ ...data, res: response.data, loading: false });
      },
      error => {
        console.log(error);
        alert("در دریافت اطلاعات مشکلی به وجود آمده");
        setData({ ...data, loading: false });
      }
    );
  };

  const clickedFilter = category => {
    forwardRequest(`https://api.divar.ir/v8/web-search/tehran/${category}`);
  };

  const handleCity = isShow => {
    setModalCity(isShow);
  };

  return (
    <context.Provider
      value={{
        data,
        clickedFilter,
        handleCity
      }}
    >
      <Router>
        <Route path={`/`}>
          <Start />
        </Route>
        {/* <Redirect from="/" to={data.city} /> */}

        {modalCity ? <Cities activeCity={data.city} /> : null}
      </Router>
    </context.Provider>
  );
}

export default App;
