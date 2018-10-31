import axios from "axios";

//Actiontypes
const UPDATE_INPUT = "UPDATE_INPUT";

//InitialState
const initialState = {
  input: ""
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

//Reducer
export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(action.payload.target.name, action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    default:
      return state;
  }
}
