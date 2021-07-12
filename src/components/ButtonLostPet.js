import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLostPet = () => {
  return (
    <button className="btn btn-red">
      <FontAwesomeIcon icon={["fas", "search"]} /> I lost my pet
    </button>
  );
};

export default ButtonLostPet;
