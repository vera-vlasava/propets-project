import React from "react";
import { Switch, Route } from "react-router-dom";
import AddFoundPet from "../components/LostFound/AddFoundPet";
import AddLostPet from "../components/LostFound/AddLostPet";
import FoundRecords from "../components/LostFound/FoundRecords";
import LostRecords from "../components/LostFound/LostRecords";
import LostPetProfile from "../components/LostFound/LostPetProfile";
import Home from "../components/Home/Home";
import UserProfile from "../components/Users/UserProfile";
import AddPost from "../components/Posts/AddPost";
import PostsRecords from "../components/Posts/PostsRecords";
import Post from "../components/Posts/Post";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <AddPost />
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
      <Route exact path="/users/:id">
        <UserProfile />
      </Route>
      <Route exact path="/posts">
        <PostsRecords />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
    </Switch>
  );
};

export default Pages;
