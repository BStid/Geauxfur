import axios from "axios";

//Actiontypes
const UPDATE_INPUT = "UPDATE_INPUT";
const ADD_LOCATION = "ADD_LOCATION";

//InitialState
const initialState = {
  search: "",
  userCurrentLat: 0,
  userCurrentLong: 0
};

//Action Creators
export const updateInput = input => {
  console.log(input.target.name);
  console.log(input.target.value);

  return {
    type: UPDATE_INPUT,
    payload: input
  };
};

export const addLocation = (userLong, userLat) => {
  return {
    type: ADD_LOCATION,
    payload: axios.post("/api/location", { userLong, userLat })
  };
};

//Reducer
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(action.payload.target.name, action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case ADD_LOCATION:
      return {
        ...state,
        userCurrentLat: action.payload.data[0].current_latitude,
        userCurrentLong: action.payload.data[0].current_longitude
      };
    default:
      return state;
  }
}
