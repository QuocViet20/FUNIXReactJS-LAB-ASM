import { combineReducers, createStore, applyMiddleware } from "redux";
import { Reducer, staffsReducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 * Gộp các reducer thành một
 */

export const combineReducer = combineReducers({
  firstReducer: Reducer,
  staffs: staffsReducer,
});

export const store = createStore(
  combineReducer,
  applyMiddleware(thunk, logger)
);
