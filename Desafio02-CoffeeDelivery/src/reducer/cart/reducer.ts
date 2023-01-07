import { products } from "../../data/products-listing";
import { ActionType } from "./actions";

export interface CartItem {
  id: number;
  amount: number;
}

interface CartState {
  items: CartItem[];
}

interface Action {
  type: ActionType;
  payload: any;
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART:
      if (!products.find((product) => product.id === action.payload.item.id))
        return state;

      if (
        state.items.some((cartItem) => cartItem.id === action.payload.item.id)
      )
        return {
          ...state,
          items: state.items.map((cartItem) => {
            if (cartItem.id === action.payload.item.id)
              return {
                ...cartItem,
                amount: cartItem.amount + action.payload.item.amount,
              };
            return cartItem;
          }),
        };

      return {
        ...state,
        items: [...state.items, action.payload.item],
      };

    case ActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case ActionType.UPDATE_ITEM_AMOUNT_IN_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount };
          }

          return item;
        }),
      };

    case ActionType.CLEAR_CART:
      return {
        items: [],
      };

    default:
      return state;
  }
}
