import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import {
  leadersConstant,
  commentsConstant,
  dishesConstant,
  promotionsConstant,
} from "./constant";

export const dishesReducer = (state = DISHES, action) => {
  switch (action.type) {
    case dishesConstant: {
      return {
        ...state,
      };
    }
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
