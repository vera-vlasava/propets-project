import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const PageSingInUp = () => {
  const [signPage, setSignPage] = useState(0);

  return (
    <div className="container-pageSingInUp">
      <div>
        {" "}
        <strong>Welcome !</strong> Please sign in/sign up to continue or
      </div>
      <div className="tabs">
        <nav className="tabs_items">
          <a
            href="#tab_signUp"
            className="tabs_item"
            onClick={() => setSignPage(0)}
          >
            Sign up
          </a>
          <a
            href="#tab_signIn"
            className="tabs_item"
            onClick={() => setSignPage(1)}
          >
            {" "}
            Sign in
          </a>
        </nav>
        {signPage ? <SignIn /> : <SignUp />}
        {/* < div className="tabs_body"> <div className="tabs_block">
               
            </div>

            </div> */}
      </div>
    </div>
  );
};
export default PageSingInUp;
