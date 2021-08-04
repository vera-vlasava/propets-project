import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonAddNew = () => {
  return (
    <button className="btn btn-green">
      <FontAwesomeIcon icon={["fas", "plus"]} /> Add new
    </button>
  );
};

export default ButtonAddNew;
