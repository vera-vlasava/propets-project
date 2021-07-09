import React from "react";
// import { useForm } from "react-cool-form";
// import Field from "./FormComponents/Field";
import Header from "./Header";
import AddPost from "./AddPost";
import NavBar from "./NavBar";
import UserBar from "./UserBar";

const AddNewPost = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <NavBar />
        <AddPost />
        <UserBar />
      </div>
    </div>
  );
};

export default AddNewPost;
