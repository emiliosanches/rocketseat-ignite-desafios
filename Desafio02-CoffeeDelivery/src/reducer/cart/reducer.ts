import { produce } from "immer";
import { ActionType } from "./actions";
import { products } from "../../data/products-listing";

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
      ) {
        return produce(state, (draft) => {
          const itemInCartIndex = draft.items.findIndex(
            (i) => i.id === action.payload.item.id
          );

          draft.items[itemInCartIndex].amount += action.payload.item.amount;
        });
      }

      return produce(state, (draft) => {
        draft.items.push(action.payload.item);
      });

    case ActionType.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.id !== action.payload.id
        );
      });

    case ActionType.UPDATE_ITEM_AMOUNT_IN_CART:
      return produce(state, (draft) => {
        const itemInCartIndex = draft.items.findIndex(
          (item) => item.id === action.payload.id
        );
        draft.items[itemInCartIndex].amount = action.payload.amount;
      });

    case ActionType.CLEAR_CART:
      return produce(state, (draft) => {
        draft.items = [];
      });

    default:
      return state;
  }
}
