import React from "react";
import { useHistory } from "react-router";

const LostRecordCard = ({ record }) => {
  
  let history = useHistory();
  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/lost-pets/${record.id}`);
  };
  return (
    <div className="card">
      <h3 className="card__title">{record.nick}</h3>
      <div className="card__info-hover icon-map-marker">{record.location}</div>
      <div className="card__img"></div>

      <div className="card-details">
        <a
          href="#"
          onClick={clickHandle}
          className="card-details__link icon-chevron-double"
          title="View details"
        >
          view details
        </a>
      </div>
    </div>
  );
};

export default LostRecordCard;
