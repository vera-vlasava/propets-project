import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFoundRecords } from "../../store/actions/act_foundRecords";
import FoundRecordCard from "./FoundRecordCard";

const FoundRecords = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getFoundRecords());
  }, []);

  const allFoundRecords = useSelector((state) => state.foundRecords.list);
  const isAuth = useSelector((state) => state.users.isAuth);

  const clickHandle = (event) => {
    event.preventDefault();
    history.push("/sign-in");
  };

  const renderFoundRecords = () => {
    if (!allFoundRecords.length) {
      return <h2>Nobody is found</h2>;
    }

    return (
      <div className="home-page__row cards">
        {allFoundRecords.map((record) => (
          <FoundRecordCard key={record.id} record={record} />
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
        <a onClick={clickHandle} href="">
          join
        </a>{" "}
        to our community!
      </div>
    );
  };

  return (
    <section className="home-page__content">
      <div className="home-page__container">
        <h2 className="home-page__title">Found pets</h2>
        <div>{showText()}</div>
        <div>{renderFoundRecords()}</div>
      </div>
    </section>
  );
};

export default FoundRecords;
