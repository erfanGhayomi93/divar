import React, { useState, useEffect } from "react";
import context from "./context";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Cities from "./component/Cities";
import HandleRouteStart from "./component/HandleRouteStart";

function App() {
  const [modalCity, setModalCity] = useState(false);
  const [data, setData] = useState({
    res: {},
    city: "tehran",
    loading: true,
    error : false    
  });

  useEffect(() => {
    const url = `https://api.divar.ir/v8/web-search/tehran`;
    forwardRequest(url);
  }, []);

  const forwardRequest = url => {
    setData({ ...data, loading: true });
    axios(url).then(
      response => {
        setData({ ...data, res: response.data, loading: false ,error : false });
      },
      error => {
        alert(error);
        setData({ ...data, loading: false , error:true });
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

        <HandleRouteStart />
        {modalCity ? <Cities activeCity={data.city} /> : null}

      </Router>
    </context.Provider>
  );
}

export default App;
/* <Redirect from="/" to={data.city} /> */