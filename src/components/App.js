import React from "react";
import AddNewPost from "./AddNewPost";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const App = () => {
  return (
    <div>
      <AddNewPost />
    </div>
  );
};

export default App;
