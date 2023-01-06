import { createContext, useEffect, useState } from "react";
import { products } from "../data/products-listing";

interface CartItem {
  id: number;
  amount: number;
}

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addItemToCart(item: CartItem) {
    if (!products.find((product) => product.id === item.id)) return;

    if (cartItems.some((cartItem) => cartItem.id === item.id))
      return setCartItems((prev) =>
        prev.map((cartItem) => {
          if (cartItem.id === item.id)
            return {
              ...cartItem,
              amount: cartItem.amount + item.amount,
            };
          return cartItem;
        })
      );

    setCartItems((prev) => [...prev, item]);
  }

  function removeItemFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateItemAmountInCart(id: number, amount: number) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, amount };
        }

        return item;
      })
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    if (cartItems.some((cartItem) => cartItem.amount === 0)) {
      setCartItems(cartItems.filter((cartItem) => cartItem.amount));
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
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
