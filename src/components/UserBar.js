import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserBar = () => {
  return (
    <div className="user-wrapper">
      <div className="user-inner-wrapper"><FontAwesomeIcon icon={["fas", "sign-out-alt"]} />Logout</div>
    </div>
  );
};

export default UserBar