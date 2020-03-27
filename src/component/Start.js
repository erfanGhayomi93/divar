import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main/Main";
import Menu from "./header/Menu";
import HandleRouteSidebar from "./sidebar/HandleRouteSidebar";

export default function Start() {

  return (
    <div className="wrapper">   
        <header className="header">
          <Menu />
        </header>
        <section className="content">
          <main className="main">
            <Main />
          </main>
          <aside className="sidebar">
            <HandleRouteSidebar />
          </aside>
        </section>
    </div>
  );
}