import React from "react";
import "./App.scss";
import Header from "../src/components/Header";

import Pages from "./layouts/Pages";
import NavBar from "./components/NavBar";
import UserBar from "./components/UserBar";

import LostPetProfile from "./components/LostFound/LostPetProfile";
import FoundPetProfile from "./components/LostFound/FoundPetProfile";
import UserProfile from "./components/Users/UserProfile";
import Posts from "./components/Posts/Posts";
import AddPost from "./components/Posts/AddPost";

const App = () => {
  return (
    <div>
      <Header />
      <Pages />
    </div>
  );
};

export default App;
