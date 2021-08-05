const InitialState = {
  users: {
    getUserById: {},
    isAuth: localStorage.token ? true : false,
  },
  posts: {
    list: [],
    getPostByID: null,
  },

  articles: {
    list: [],
    getArticleById: null,
  }, 

  foundRecords: {
    list: [],
    getFoundRecordById: null,
  },

  lostRecords: {
    list: [],
    getLostRecordById: null,
  },
};

export default InitialState;
