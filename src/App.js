import React from "react";
import "./App.scss";
import Header from "../src/components/Header/Header";

import Pages from "./layouts/Pages";
import NavBar from "./components/SideBars/NavBar";
import UserBar from "./components/SideBars/UserBar";

import Header2 from "./components/Header/Header2";
import Footer from "./components/Footer/Footer";
import HomeInit from "./components/Home/HomeInit";

import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const App = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  let location = useLocation();
  const path = location.pathname.split("/");

  const renderHeader = () => {
    if (isAuth || path[1] == "lost-pets" || path[1] == "found-pets") {
      return <Header />;
    } else if (location.pathname == "/sign-in") {
      return null;
    } else {
      return <Header2 />;
    }
  };

  const renderMain = () => {
    if (isAuth || path[1] == "lost-pets" || path[1] == "found-pets") {
      return (
        <main className="page home-page">
          <NavBar />
          <Pages />
          <UserBar />
        </main>
      );
    } else if (location.pathname == "/sign-in") {
      return <Pages />;
    } else {
      return <HomeInit />;
    }
  };

  const renderFooter = () => {
    if (
      isAuth ||
      location.pathname == "/sign-in" ||
      path[1] == "lost-pets" ||
      path[1] == "found-pets"
    ) {
      return null;
    }
    return <Footer />;
  };

  return (
    <div className="wrapper">
      <div>{renderHeader()}</div>
      <div>{renderMain()}</div>
      <div>{renderFooter()}</div>
    </div >
  );
};

export default App;
