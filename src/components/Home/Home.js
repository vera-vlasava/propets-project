import React from "react";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const Home = () => {
  return (
    <main className="page home-page">
      <NavBar />
      <section className="home-page__content">Home Page</section>
      <UserBar />
    </main>
  );
};

export default Home;
 