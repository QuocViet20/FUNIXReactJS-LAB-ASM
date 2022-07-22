import { combineReducers, createStore } from "redux";
import {
  dishesReducer,
  leadersReducer,
  commentsReducer,
  promotionsReducer,
} from "./reducer";

export const combineReducer = combineReducers({
  dishes: dishesReducer,
  leaders: leadersReducer,
  comments: commentsReducer,
  promotions: promotionsReducer,
});

export const store = createStore(combineReducer);
