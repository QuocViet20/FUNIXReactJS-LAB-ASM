import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  departmentsReducer,
  Reducer,
  staffsReducer,
  departmentsDetailReducer,
  staffsSalaryReducer,
} from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

/**
 * Gộp các reducer thành một
 */

export const combineReducer = combineReducers({
  firstReducer: Reducer,
  staffs: staffsReducer,
  departments: departmentsReducer,
  departmentsDetail: departmentsDetailReducer,
  staffsSalary: staffsSalaryReducer,
});

export const store = createStore(
  combineReducer,
  applyMiddleware(thunk, logger)
);
