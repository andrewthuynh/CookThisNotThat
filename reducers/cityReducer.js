import { GET_CITIES } from "../actions/types";
const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return action.payload;
    default:
      return state;
  }
}