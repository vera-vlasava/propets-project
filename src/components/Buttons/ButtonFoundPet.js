import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonFoundPet = () => {
  return (
    <button className="btn btn-green">
      <FontAwesomeIcon icon={["fas", "paw"]} /> I found a pet
    </button>
  );
};

export default ButtonFoundPet;