import { DECREASE_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "../types";

export const increaseItem = (id) => {
  return {
    type: INCREASE_ITEM,
    payload: { id },
  };
};

export const decreaseItem = (id) => {
  return {
    type: DECREASE_ITEM,
    payload: { id },
  };
};

export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};
