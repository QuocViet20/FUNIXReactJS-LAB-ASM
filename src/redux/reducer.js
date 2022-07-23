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
  ADD_COMMENTS,
  COMMENTS_FAILED,
  PROMOS_LOADING,
  ADD_PROMOS,
  PROMOS_FAILED,
  LEADERS_LOADING,
  ADD_LEADERS,
  LEADERS_FAILED,
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
export const leadersReducer = (
  state = { isLoading: true, errMess: null, leaders: [] },
  action
) => {
  switch (action.type) {
    case LEADERS_LOADING: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        leaders: [],
      };
    }
    case ADD_LEADERS: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    }
    case LEADERS_FAILED: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    }
    default:
      return state;
  }
};
export const commentsReducer = (
  state = { errMess: null, comments: [] },
  action
) => {
  switch (action.type) {
    case ADD_COMMENTS: {
      return {
        ...state,
        errMess: null,
        comments: action.payload,
      };
    }
    case COMMENTS_FAILED: {
      return {
        ...state,
        errMess: action.payload,
      };
    }
    default:
      return state;
  }
};
export const promotionsReducer = (
  state = { isLoading: true, errMess: null, promotions: [] },
  action
) => {
  switch (action.type) {
    case ADD_PROMOS: {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    }
    case PROMOS_LOADING: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        promotions: [],
      };
    }
    case PROMOS_FAILED: {
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    }
    default:
      return state;
  }
};
