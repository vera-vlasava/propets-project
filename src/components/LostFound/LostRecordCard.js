import React from "react";

const LostRecordCard = ({ record }) => {
  return (
    <div className="card">
     
      <h3 className="card__title">{record.nick}</h3>
      <div className="card__info-hover icon-map-marker">{record.location}</div>
      <div className="card__img"></div>

      <div className="card-details">
        <a
          href="#"
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
