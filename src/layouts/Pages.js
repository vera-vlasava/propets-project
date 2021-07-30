import React from "react";
import { Switch, Route } from "react-router-dom";
import AddFoundPet from "../components/LostFound/AddFoundPet";
import FoundRecords from "../components/LostFound/FoundRecords";
import LostRecords from "../components/LostFound/LostRecords";
import Home from "../components/Home/Home";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/lost-pets">
        <LostRecords />
      </Route>
      <Route exact path="/found-pets">
        <FoundRecords />
      </Route>
      <Route exact path="/add-new-found-pet">
        <AddFoundPet />
      </Route>
    </Switch>
  );
};

export default Pages;
