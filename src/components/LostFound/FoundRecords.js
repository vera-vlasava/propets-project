import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFoundRecords } from "../../store/actions/act_foundRecords";
import FoundRecordCard from "./FoundRecordCard";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const FoundRecords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoundRecords());
  }, []);

  const allFoundRecords = useSelector((state) => state.foundRecords.list);

  console.log(allFoundRecords);

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

  return (
    <main className="page home-page">
      <NavBar />
      <section className="home-page__content">
        <div className="home-page__container">
          <h2 className="home-page__title">Found pets</h2>
          <div className="home-page__info-link info-link">
            Would you like to publish a post? <a href="#">join</a> to our
            community!
          </div>
          <div>{renderFoundRecords()}</div>
        </div>
      </section>
      <UserBar />
    </main>
  );
};

export default FoundRecords;