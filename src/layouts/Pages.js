import React from "react";
import { Switch, Route } from "react-router-dom";
import AddFoundPet from "../components/LostFound/AddFoundPet";
import AddLostPet from "../components/LostFound/AddLostPet";
import FoundRecords from "../components/LostFound/FoundRecords";
import LostRecords from "../components/LostFound/LostRecords";
import LostPetProfile from "../components/LostFound/LostPetProfile";
import FoundPetProfile from "../components/LostFound/FoundPetProfile";
import UserProfile from "../components/Users/UserProfile";
import AddPost from "../components/Posts/AddPost";

import PostsRecords from "../components/Posts/PostsRecords";
import Post from "../components/Posts/Post";

import PageSingInUp from "../components/SignInUp/PageSignInUp";
import Fostering from "../components/Articles/Fostering";
import Hotels from "../components/Articles/Hotels";
import VetHelp from "../components/Articles/VetHelp";
import Walking from "../components/Articles/Walking";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostsRecords />
      </Route>
      <Route exact path="/home">
        <PostsRecords />
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
      <Route exact path="/add-new-lost-pet">
        <AddLostPet />
      </Route>
      <Route exact path="/lost-pets/:id">
        <LostPetProfile />
      </Route>
      <Route exact path="/found-pets/:id">
        <FoundPetProfile />
      </Route>
      <Route exact path="/users/:id">
        <UserProfile />
      </Route>
      {/* <Route path="/posts/:id">
        <Post />
      </Route> */}
      <Route path="/sign-in">
        <PageSingInUp />
      </Route>
      <Route path="/add-new-post">
        <AddPost />
      </Route>
      <Route path="/fostering">
        <Fostering />
      </Route>
      <Route path="/hotels">
        <Hotels />
      </Route>
      <Route path="/walking">
        <Walking />
      </Route>
      <Route path="/vet-help">
        <VetHelp />
      </Route>
    </Switch>
  );
};

export default Pages;
