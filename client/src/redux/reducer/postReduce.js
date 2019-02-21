import { CREATE_POST, GET_POSTS } from "../actions/type";

const initialState = {
   posts: [],
   post: {}
}

export default function(state = initialState, action) {
   switch(action.type) {
      case GET_POSTS:
         return {
            ...state,
            posts: action.payload
         }
      case CREATE_POST:
         return {
            ...state,
            posts: [action.payload, ...state.posts]
         }
      default: 
         return state;
   }
}