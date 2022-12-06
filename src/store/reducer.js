import {USER_POSTS_FETCH_SUCCEEDED} from "./actions";

export const reducer = (state = {posts: null}, action) => {
  switch (action.type) {
    case USER_POSTS_FETCH_SUCCEEDED: {
      const posts = action.payload.data;
      return {
        ...state,
        posts,
      }
    }
    default: return state
  }
}
