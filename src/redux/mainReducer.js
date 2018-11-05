import axios from "axios";

//Actiontypes
const GET_USER = "GET_USER";
const GET_ORDER_HISTORY = "GET_ORDER_HISTORY";
const ADD_LOCATION = "ADD_LOCATION";
const ADD_IMAGE = "ADD_IMAGE";
const UPDATE_INPUT = "UPDATE_INPUT";
const UPDATE_PROFILE = "UPDATE_PROFILE";

//InitialState
const initialState = {
  search: "",
  dobInput: "",
  phoneInput: "",
  genderInput: "",
  emailInput: "",
  userCurrentLat: 0,
  userCurrentLong: 0,
  userInfo: [],
  image: "",
  imageError: "",
  orderHistory: [],
  isLoading: false
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

//GET
export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/user")
  };
};

export const getOrderHistory = () => {
  return {
    type: GET_ORDER_HISTORY,
    payload: axios.get("/api/history")
  };
};

//POST
export const addLocation = (userLong, userLat) => {
  return {
    type: ADD_LOCATION,
    payload: axios.post("/api/location", { userLong, userLat })
  };
};
export const addImage = imageUrl => {
  return {
    type: ADD_IMAGE,
    payload: axios.post("/api/image", { imageUrl })
  };
};

//PUT
export const updateProfile = (
  dobInput,
  emailInput,
  phoneInput,
  genderInput,
  firstNameInput,
  lastNameInput
) => {
  console.log(
    dobInput,
    emailInput,
    phoneInput,
    genderInput,
    firstNameInput,
    lastNameInput
  );
  return {
    type: UPDATE_PROFILE,
    payload: axios.put("/api/profile", {
      dobInput,
      emailInput,
      phoneInput,
      genderInput,
      firstNameInput,
      lastNameInput
    })
  };
};
//Reducer
export default function mainReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case UPDATE_INPUT:
      console.log(
        "passing reducer...",
        action.payload.target.name,
        action.payload.target.value
      );
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
    case `${ADD_IMAGE}_FULFILLED`:
      return {
        ...state,
        image: action.payload.data
      };
    case `${ADD_IMAGE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${ADD_IMAGE}_REJECTED`:
      return {
        ...state,
        imageError: "Image Upload Unsuccessful",
        isLoading: false
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        userInfo: action.payload.data[0]
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state
      };
    case `${UPDATE_PROFILE}_FULFILLED`:
      return {
        ...state,
        updatedInfo: action.payload.data
      };
    case `${UPDATE_PROFILE}_REJECTED`:
      return {
        ...state
      };
    case `${GET_ORDER_HISTORY}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ORDER_HISTORY}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        orderHistory: action.payload.data,
        isLoading: false
      };
    case `${GET_ORDER_HISTORY}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
