import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLostRecords } from "../../store/actions/act_lostRecords";
import LostRecordCard from "./LostRecordCard";
import { useHistory } from "react-router";

const LostRecords = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getLostRecords());
  }, []);

  const allLostRecords = useSelector((state) => state.lostRecords.list);
  const isAuth = useSelector((state) => state.users.isAuth);

  const clickHandle = (event) => {
    event.preventDefault();
    history.push("/sign-in");
  };

  const renderLostRecords = () => {
    if (!allLostRecords.length) {
      return <h2>Nobody is lost</h2>;
    }

    return (
      <div className="home-page__row cards">
        {allLostRecords.map((record) => (
          <LostRecordCard key={record.id} record={record} />
        ))}
      </div>
    );
  };

  const showText = () => {
    if (isAuth) {
      return null;
    }
    return (
      <div className="home-page__info-link info-link">
        Would you like to publish a post?{" "}
        <a href="" onClick={clickHandle}>
          join
        </a>{" "}
        to our community!
      </div>
    );
  };

  return (
    <section className="home-page__content">
      <div className="home-page__container">
        <h2 className="home-page__title">Lost pets</h2>
        <div>{showText()}</div>
        <div>{renderLostRecords()}</div>
      </div>
    </section>
  );
};

export default LostRecords;
