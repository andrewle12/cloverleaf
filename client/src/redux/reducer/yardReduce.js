import { CREATE_YARD, GET_YARD } from "../actions/type";

const initialState = {
   yards: [],
   yard: {}
}

export default function(state = initialState, action) {
   switch(action.type) {
      case GET_YARD:
         return {
            ...state,
            yards: action.payload
         }
      case CREATE_YARD:
         return {
            ...state,
            yards: [action.payload, ...state.posts]
         }
      default: 
         return state;
   }
}