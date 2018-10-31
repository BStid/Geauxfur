import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise-middleware";

import sender from "./senderReducer";
import main from "./mainReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({ sender, main });
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleWare()));
const store = createStore(reducers, middlewares);

export default store;
