import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import {
  leadersConstant,
  commentsConstant,
  dishesConstant,
  promotionsConstant,
  ADD_DISHES,
  DISHES_FAILED,
  DISHES_LOADING,
} from "./constant";

export const dishesReducer = (
  state = { isLoading: true, errMess: null, dishes: [] },
  action
) => {
  switch (action.type) {
    case ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };

    case DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case DISHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
export const leadersReducer = (state = LEADERS, action) => {
  switch (action.type) {
    case leadersConstant: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export const commentsReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case commentsConstant: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export const promotionsReducer = (state = PROMOTIONS, action) => {
  switch (action.type) {
    case promotionsConstant: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
