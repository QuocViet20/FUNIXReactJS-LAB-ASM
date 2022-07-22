import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  dishesReducer,
  leadersReducer,
  commentsReducer,
  promotionsReducer,
} from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const combineReducer = combineReducers({
  dishes: dishesReducer,
  leaders: leadersReducer,
  comments: commentsReducer,
  promotions: promotionsReducer,
});

export const store = createStore(
  combineReducer,
  applyMiddleware(thunk, logger)
);
