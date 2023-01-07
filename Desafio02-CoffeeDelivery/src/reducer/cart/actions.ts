import { CartItem } from "./reducer";

export enum ActionType {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  UPDATE_ITEM_AMOUNT_IN_CART = "UPDATE_ITEM_AMOUNT_IN_CART",
  CLEAR_CART = "CLEAR_CART",
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeItemFromCartAction(id: number) {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
}

export function updateItemAmountInCartAction(id: number, amount: number) {
  return {
    type: ActionType.UPDATE_ITEM_AMOUNT_IN_CART,
    payload: {
      id,
      amount,
    },
  };
}

export function clearCartAction() {
  return {
    type: ActionType.CLEAR_CART,
    payload: {},
  };
}
