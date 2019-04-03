import axios from "axios";
import {GET_CITIES, GET_ERRORS} from "./types";

export const getCities = () => dispatch => {
    axios
      .get("http://localhost:5000/api/cities?name")
      .then(res => {
        dispatch({
            type: GET_CITIES,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };