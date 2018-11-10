import axios from "axios";
require("dotenv").config();

//Actiontypes
const GET_DRIVER_ROUTE = "GET_DRIVER_ROUTE";
const GET_DRIVER_DESTINATION = "GET_DRIVER_DESTINATION";
const GET_DRIVER_COORDINATES = "GET_DRIVER_COORDINATES";
const GET_DRIVER_NAME = "GET_DRIVER_NAME";
const GET_DRIVER_PICTURE = "GET_DRIVER_PICTURE";
const GET_ADDRESS_LATLONG = "GET_ADDRESS_LATLONG";
const GET_ACTIVE_DRIVER = "GET_ACTIVE_DRIVER";
const GET_ACTIVE_ITEMS = "GET_ACTIVE_ITEMS";
const UPDATE_ADDRESS_INPUT = "UPDATE_ADDRESS_INPUT";
const UPDATE_CARDS_CLASS = "UPDATE_CARDS_CLASS";
const UPDATE_ACTIVE_PANEL = "UPDATE_ACTIVE_PANEL";
const CANCEL_GEAUXFUR = "CANCEL_GEAUXFUR";

//InitialState
const initialState = {
  routeCoordinates: [],
  senderCurrentLong: 0,
  senderCurrentLat: 0,
  driverDestinationLong: 0,
  driverDestinationLat: 0,
  driverCurrentLong: 0,
  driverCurrentLat: 0,
  driverName: "",
  driverPicture: "",
  searchAddressInput: "",
  addressLat: 0,
  addressLong: 0,
  cardsClass: "cardsContainer",
  panelClass: "hiddenActive",
  listingClass: "hiddenActiveListing",
  activeItems: [],
  activeDriver: [],
  activeDriverCard: "activeDriverContainer",
  areListingsActive: false,
  isLoading: false
};

//Action Creators

//Get Route Driver is Taking to Reach Sender
export function getDriverRoute(
  senderCurrentLong,
  senderCurrentLat,
  driverCurrentLong,
  driverCurrentLat
) {
  return {
    type: GET_DRIVER_ROUTE,
    payload: axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${senderCurrentLong}%2C${senderCurrentLat}%3B${driverCurrentLong}%2C${driverCurrentLat}.json?access_token=${
        process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
      }&geometries=geojson`
    )
  };
}
//Cancel Active Geauxfur
export const cancelGeauxfur = value => {
  return {
    type: CANCEL_GEAUXFUR,
    payload: value
  };
};
//Input Handler for Address Input
export function updateAddressInput(input) {
  return {
    type: UPDATE_ADDRESS_INPUT,
    payload: input
  };
}

//Update Classes
export function updateCardsClass(input) {
  return {
    type: UPDATE_CARDS_CLASS,
    payload: input
  };
}
export function updateActivePanel(input) {
  return {
    type: UPDATE_ACTIVE_PANEL,
    payload: input
  };
}

//GET Address Lat and Long
export function getAddressLatLong(query) {
  return {
    type: GET_ADDRESS_LATLONG,
    payload: axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${
        process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
      }`
    )
  };
}
//GET Items that are currently "Active"
export function getActiveItems() {
  return {
    type: GET_ACTIVE_ITEMS,
    payload: axios.get("/api/items")
  };
}
//GET Driver's Name
export function getDriverName(driverId) {
  return {
    type: GET_DRIVER_NAME,
    payload: axios.get(`/api/name/${driverId}`)
  };
}

//GET Driver's Picture
export function getDriverPicture(driverId) {
  return {
    type: GET_DRIVER_PICTURE,
    payload: axios.get(`/api/picture/${driverId}`)
  };
}
//Get Route Driver is Taking to Deliver Item at the Destination
export function getDriverDestination(
  senderCurrentLong,
  senderCurrentLat,
  driverDestinationLong,
  driverDestinationLat
) {
  return {
    type: GET_DRIVER_DESTINATION,
    payload: axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${senderCurrentLong},${senderCurrentLat};${driverDestinationLong},${driverDestinationLat}.json?access_token=${
        process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
      }&geometries=geojson`
    )
  };
}
//Get Active Driver Information
export function getActiveDriver() {
  return {
    type: GET_ACTIVE_DRIVER,
    payload: axios.get("/api/activedriver")
  };
}
//Get Driver's Current Long/Lat
export function getDriverCoordinates() {
  return {
    type: GET_DRIVER_COORDINATES,
    payload: axios.get("/api/userlocation")
  };
}

//Reducer
export default function senderReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CARDS_CLASS:
      return {
        ...state,
        cardsClass: action.payload
      };
    case CANCEL_GEAUXFUR:
      return {
        ...state,
        activeDriverCard: action.payload[0],
        cardsClass: action.payload[1],
        areListingsActive: false
      };
    case UPDATE_ACTIVE_PANEL:
      return {
        ...state,
        panelClass: action.payload[0],
        activeDriverCard: action.payload[1],
        areListingsActive: true
      };
    case UPDATE_ADDRESS_INPUT:
      return {
        ...state,
        searchAddressInput: action.payload
      };
    case `${GET_ACTIVE_ITEMS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ACTIVE_ITEMS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        activeItems: action.payload.data
      };
    case `${GET_DRIVER_ROUTE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DRIVER_ROUTE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        routeCoordinates: action.payload.data.routes[0].geometry.coordinates
      };
    case `${GET_DRIVER_ROUTE}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_DRIVER_DESTINATION}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ACTIVE_DRIVER}_FULFILLED`:
      console.log(action.payload.data[0]);
      return {
        ...state,
        isLoading: false,
        activeDriver: action.payload.data[0]
      };
    case `${GET_ACTIVE_DRIVER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_DRIVER_DESTINATION}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        routeCoordinates: action.payload.data
      };
    case `${GET_DRIVER_DESTINATION}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_DRIVER_COORDINATES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DRIVER_COORDINATES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        driverCurrentLat: action.payload.data[0].current_latitude,
        driverCurrentLong: action.payload.data[0].current_longitude
      };
    case `${GET_DRIVER_COORDINATES}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_DRIVER_NAME}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DRIVER_NAME}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        driverName: action.payload.data[0].first_name
      };
    case `${GET_DRIVER_NAME}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_DRIVER_PICTURE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_DRIVER_PICTURE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        driverPicture: action.payload.data[0].image_url
      };
    case `${GET_DRIVER_PICTURE}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case `${GET_ADDRESS_LATLONG}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ADDRESS_LATLONG}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        addressLat: action.payload.data.features[0].geometry.coordinates[1],
        addressLong: action.payload.data.features[0].geometry.coordinates[0]
      };
    case `${GET_ADDRESS_LATLONG}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
