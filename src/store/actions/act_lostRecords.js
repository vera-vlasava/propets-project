import { FETCH_LOST_RECORDS, ADD_LOST_RECORD } from "../typesList";
import { URL } from "../utilites";

export const getLostRecords = () => {
  return async (dispatch) => {
    try {
      // const response = await fetch(`${URL}/lostfounds/lost`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await response.json();
      const data = [
        {
          id: 1,
          userId: 2,
          lostFound: "lost",
          type: "cat",
          sex: "male",
          breed: "cheshir",
          nick: "Kat",
          color: "Black",
          height: "10",
          disFeatures: "Some features",
          description: "Any words of description",
          location: "Here, in the street",
          photo: "aaa.jpg",
          phone: "101010",
          email: "cheshir@mail.ru",
          createdAt: "2021-07-14T11:43:14.000Z",
          User: {
            id: 2,
            fullName: "Super Administrator",
            email: "sa@mail.com",
            phone: null,
            avatar: null,
            pet: null,
            nick: null,
            photo: null,
            createdAt: "2021-07-14T11:13:05.000Z",
            updatedAt: "2021-07-14T11:13:05.000Z",
          },
        },
      ];
      await dispatch(fetchLostRecords({ list: data }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const fetchLostRecords = (obj) => {
  return {
    type: FETCH_LOST_RECORDS,
    payload: obj,
  };
};
