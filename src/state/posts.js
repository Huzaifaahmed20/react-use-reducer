export const initialState = {
  loading: false,
  posts: [],
};

export const actions = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILURE: 'GET_POSTS_FAILURE',
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        message: 'Posts fetched successfully',
        posts: action.payload,
        loading: false,
      };
    case actions.GET_POSTS_FAILURE:
      return { ...state, message: 'Something went wrong', loading: false };
    default:
      return state;
  }
};
