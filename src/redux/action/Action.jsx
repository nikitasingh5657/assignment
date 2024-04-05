export const ADD_TO_CART = 'ADD_TO_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
// import {ADD_TO_CART, EMPTY_CART, REMOVE_ITEM_FROM_CART} from '../ActionType';

export const addToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeItemFromCart = data => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: data,
});
export const emptyCart = () => ({
  type: EMPTY_CART,
});
