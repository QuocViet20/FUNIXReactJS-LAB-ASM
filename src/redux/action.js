import {
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
import { baseUrl } from "../shared/baseUrl";

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};

export const dishesLoading = () => ({
  type: DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addcomments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: COMMENTS_FAILED,
  payload: errmess,
});

export const addcomments = (dishes) => ({
  type: ADD_COMMENTS,
  payload: dishes,
});

export const fetchPromotions = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: PROMOS_LOADING,
});
export const promosFailed = (errmess) => ({
  type: PROMOS_FAILED,
  payload: errmess,
});
export const addPromos = (promos) => ({
  type: ADD_PROMOS,
  payload: promos,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true));

  return fetch(baseUrl + "leaders")
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)));
};

export const leadersLoading = () => ({
  type: LEADERS_LOADING,
});
export const addLeaders = (leaders) => ({
  type: ADD_LEADERS,
  payload: leaders,
});
export const leaderFailed = (errMess) => ({
  type: LEADERS_FAILED,
  payload: errMess,
});
