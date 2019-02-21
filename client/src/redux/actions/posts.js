import axios from "axios";
import { CREATE_POST, GET_POSTS, GET_ERRORS } from "../actions/type";

export const createPost = (postData) => (dispatch) => {
   axios.post("/api/posts", postData)
      .then(res => {
         dispatch({
            type: CREATE_POST,
            payload: res.data
         })
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
         })
      });
}

export const getPosts = () => (dispatch) => {
   axios.get("/api/posts")
      .then(res => {
         dispatch({
            type: GET_POSTS,
            payload: res.data
         })
      })
      .catch(err => {
         dispatch({
            type: GET_ERRORS,
            payload: null
         })
      });
}