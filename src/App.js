import React from "react";
import "./App.scss";

import LostRecords from "./components/LostFound/LostRecords";
import FoundRecords from "./components/LostFound/FoundRecords";
import AddFoundPet from "./components/LostFound/AddFoundPet";
import Header from "../src/components/Header";
import Home from "./components/Home/Home";
import Pages from "./layouts/Pages";
import NavBar from "./components/NavBar";
import UserBar from "./components/UserBar";

const App = () => {
  return (
    <div>
      <Header />
      <Pages />
    </div>
  );
};

export default App;
