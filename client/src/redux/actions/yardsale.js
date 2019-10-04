import axios from "axios";
import { CREATE_YARD, GET_YARD, GET_ERRORS } from "../actions/type";

export const createYard = (postData) => (dispatch) => {
   axios.post("/api/yard", postData)
      .then(res => {
         dispatch({
            type: CREATE_YARD,
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

export const getYard = () => (dispatch) => {
   axios.get("/api/yard")
      .then(res => {
         dispatch({
            type: GET_YARD,
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