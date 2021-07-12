import React from "react";
// import { useForm } from "react-cool-form";
// import Field from "./FormComponents/Field";
import Header from "./Header";
import AddPost from "./AddPost";
import NavBar from "./NavBar";
import UserBar from "./UserBar";
import ButtonAddNew from "./ButtonAddNew";
import ButtonLostPet from "./ButtonLostPet";
import ButtonFoundPet from "./ButtonFoundPet";

const AddNewPost = () => {
  return (
    <div>
      <Header>
        <ButtonLostPet />
        <ButtonAddNew />
        <ButtonFoundPet />
      </Header>
      <div className="container">
        <NavBar />
        <AddPost />
        <UserBar />
      </div>
    </div>
  );
};

export default AddNewPost;
