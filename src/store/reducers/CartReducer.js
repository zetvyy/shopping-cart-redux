import { DECREASE_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "../types";
import img1 from "../../pic/bdenim.jpg";
import img2 from "../../pic/redhoodie.jpg";

const initialState = {
  data: [
    {
      id: 1,
      image: img1,
      name: "Blue Denim Shirt",
      detail: "Shirt - Blue",
      color: "Blue Denim",
      size: "M",
      price: 17.99,
      qty: 1,
    },
    {
      id: 2,
      image: img2,
      name: "Red Hoodie",
      detail: "Hoodie - Red",
      color: "Red",
      size: "M",
      price: 34.69,
      qty: 1,
    },
  ],
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE_ITEM: {
      return {
        ...state,
        data: [
          ...state.data.map((item) =>
            item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
        ],
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        data: [
          ...state.data.map((i) =>
            i.id === payload.id ? { ...i, totalItem: i.totalItem - 1 } : i
          ),
        ],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload.id),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
