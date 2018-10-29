import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise-middleware";

import reducer from "./reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combined = applyMiddleware(promiseMiddleWare());
const store = createStore(reducer, combined);

export default store;
