import axios from "axios";

//Actiontypes
const GET_USER = "GET_USER";
const GET_ORDER_HISTORY = "GET_ORDER_HISTORY";
const GET_REVIEWS = "GET_REVIEWS";
const REMOVE_REVIEW = "REMOVE_REVIEW";
const ADD_LOCATION = "ADD_LOCATION";
const ADD_IMAGE = "ADD_IMAGE";
const ADD_REVIEW = "ADD_REVIEW";
const UPDATE_INPUT = "UPDATE_INPUT";
const UPDATE_PROFILE = "UPDATE_PROFILE";

//InitialState
const initialState = {
  search: "",
  itemType: "",
  weightInput: 0,
  dobInput: "",
  phoneInput: "",
  genderInput: "",
  emailInput: "",
  reviewInput: "",
  userCurrentLat: 0,
  userCurrentLong: 0,
  userInfo: [],
  reviews: [],
  image: "",
  imageError: "",
  review: "",
  reviewError: "",
  orderHistory: [],
  isLoading: true
};

//Action Creators
export const updateInput = input => {
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
export const getReviews = () => {
  return {
    type: GET_REVIEWS,
    payload: axios.get("/api/reviews")
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
export const addReview = (review, rating, driverId) => {
  return {
    type: ADD_REVIEW,
    payload: axios.post("/api/review", { review, rating, driverId })
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

//DELETE
export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    payload: axios.delete(`/api/review/${reviewId}`)
  };
};
//Reducer
export default function mainReducer(state = initialState, action) {
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
    case `${ADD_REVIEW}_FULFILLED`:
      return {
        ...state,
        review: action.payload.data
      };
    case `${ADD_REVIEW}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${ADD_REVIEW}_REJECTED`:
      return {
        ...state,
        reviewError: "Image Upload Unsuccessful",
        isLoading: false
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        userInfo: action.payload.data[0],
        isLoading: false
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
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
    case `${GET_REVIEWS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_REVIEWS}_FULFILLED`:
      return {
        ...state,
        reviews: action.payload.data,
        isLoading: false
      };
    case `${GET_REVIEWS}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
