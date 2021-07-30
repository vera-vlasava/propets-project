import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFound } from "../../store/actions/act_foundRecords";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const AddFoundPet = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    lostFound: "",
    type: "",
    sex: "",
    breed: "",
    nick: "",
    color: "",
    height: "",
    disFeatures: "",
    description: "",
    location: "",
    photo: "",
    phone: "",
    email: "",
  });

  const changeFieldHandle = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(addNewFound(formData));
  };

  return (
    <main className="page home-page">
      <NavBar />
      <section className="home-page__content">
        <div className="home-page__container">
          <h2 className="home-page__title">
            Found a pet? Please complete the form to help.
          </h2>
          <div className="home-page__row lost-page">
            <div className="lost-page__content">
              <form
                action="#"
                id="form"
                className="lost-page__form"
                onSubmit={submitHandle}
              >
                <div className="lost-page__items">
                  <div className="lost-page__item form__item">
                    <label>Lost/Found:</label>
                    <select
                      className="form__select"
                      name="lostFound"
                      onChange={changeFieldHandle}
                    >
                      <option>Found</option>
                      <option>Lost</option>
                    </select>
                  </div>
                  <div className="lost-page__item">
                    <label>Nickname:</label>
                    <input
                      type="text"
                      placeholder="Uncle Sam"
                      name="nick"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="lost-page__item">
                    <label>Type:</label>
                    <input
                      type="text"
                      placeholder="Dog"
                      name="type"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="lost-page__item">
                    <label>Sex:</label>
                    <select
                      className="form__select"
                      name="sex"
                      onChange={changeFieldHandle}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="lost-page__item">
                    <label>Breed:</label>
                    <input
                      type="text"
                      placeholder="Golden Retriever"
                      name="breed"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="lost-page__item">
                    <label>Color:</label>
                    <input
                      type="text"
                      placeholder="Beige"
                      name="color"
                      onChange={changeFieldHandle}
                    />
                  </div>
                  <div className="lost-page__item">
                    <label>Height:</label>
                    <select
                      className="form__select"
                      name="height"
                      onChange={changeFieldHandle}
                    >
                      <option>45-75 cm</option>
                      <option>75-100 cm</option>
                    </select>
                  </div>
                </div>
                <div className="lost-page__items items-img">
                  <img
                    src="/assets/images/lost-form-img.svg"
                    alt="dog-walking"
                  />
                </div>
                <div className="lost-page__items">
                  <div className="lost-page__item">
                    <label>
                      Distinktive features:
                      <span>up to 60 char</span>
                    </label>
                    <textarea
                      rows="2"
                      placeholder="blue collar with stars, no left ear, damaged tail."
                      name="disFeatures"
                      onChange={changeFieldHandle}
                    ></textarea>
                  </div>
                  <div className="lost-page__item">
                    <label>
                      Description:
                      <span>up to 150 char</span>
                    </label>
                    <textarea
                      rows="6"
                      placeholder="brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox"
                      name="description"
                      onChange={changeFieldHandle}
                    ></textarea>
                  </div>
                  <div className="lost-page__item">
                    <label>Location:</label>
                    <textarea
                      rows="2"
                      placeholder="Oliver Platz, Berlin"
                      name="location"
                      onChange={changeFieldHandle}
                    ></textarea>
                  </div>
                </div>
                <div className="lost-page__items">
                  <div className="lost-page__item">
                    <label>Photo:</label>
                    <input
                      type="text"
                      placeholder="my-photo.img"
                      name="photo"
                      onChange={changeFieldHandle}
                    />
                  </div>
                </div>
                <div className="lost-page__items">
                  <div className="lost-page__item">
                    <label>Contacts:</label>
                    <div className="lost-page__item-container">
                      <input
                        type="tel"
                        placeholder="Phone*"
                        name="phone"
                        required
                        onChange={changeFieldHandle}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={changeFieldHandle}
                      />
                    </div>
                  </div>
                  <div className="lost-page__item">
                    <button className="button blue icon-paw" type="submit">
                      <span className="text">Publish</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <UserBar />
    </main>
  );
};

export default AddFoundPet;
