const InitialState = {
  users: {
    getUserById: {},
    isAuth: localStorage.token ? true : false,
  },
  posts: {
    list: [],
    addPostMode: false,
    postById: {},
    comments: {
      list: []
    }
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
