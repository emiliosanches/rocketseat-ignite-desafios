import { createContext, useState } from "react";

interface CartItem {
  id: number;
  amount: number;
}

interface CartContext {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  updateItemAmountInCart: (id: number, amount: number) => void;
}

export const CartContext = createContext<CartContext>({} as any);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addItemToCart(item: CartItem) {
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

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemAmountInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
