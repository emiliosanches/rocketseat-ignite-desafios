import { createContext, useEffect, useReducer } from "react";
import {
  addItemToCartAction,
  clearCartAction,
  removeItemFromCartAction,
  updateItemAmountInCartAction,
} from "../reducer/cart/actions";
import { CartItem, cartReducer } from "../reducer/cart/reducer";

interface CartContext {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  updateItemAmountInCart: (id: number, amount: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContext>({} as any);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item));
  }

  function removeItemFromCart(id: number) {
    dispatch(removeItemFromCartAction(id));
  }

  function updateItemAmountInCart(id: number, amount: number) {
    dispatch(updateItemAmountInCartAction(id, amount));
  }

  function clearCart() {
    dispatch(clearCartAction());
  }

  useEffect(() => {
    const itemWithAmountZero = cartState.items.find(
      (cartItem) => cartItem.amount === 0
    );

    if (itemWithAmountZero) {
      dispatch(removeItemFromCartAction(itemWithAmountZero.id));
    }
  }, [cartState.items]);

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItemToCart,
        removeItemFromCart,
        updateItemAmountInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
