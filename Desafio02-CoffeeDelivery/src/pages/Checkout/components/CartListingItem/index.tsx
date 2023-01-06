import { Trash } from "phosphor-react";
import { useContext, useMemo } from "react";
import { NumberInput } from "../../../../components/NumberInput/Controlled";
import { CartContext } from "../../../../contexts/CartContext";
import { products } from "../../../../data/products-listing";

import {
  CartControlsContainer,
  CartItemCard,
  RemoveItemFromCartButton,
  Separator,
} from "./styles";

interface CartListingItemProps {
  id: number;
  amount: number;
}

export function CartListingItem({ id, amount }: CartListingItemProps) {
  const { removeItemFromCart, updateItemAmountInCart } =
    useContext(CartContext);

  const product = useMemo(() => {
    return products.find((product) => product.id === id)!;
  }, []);

  function handleUpdateItemAmount(newAmount: number) {
    updateItemAmountInCart(id, newAmount);
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(id);
  }

  return (
    <>
      <CartItemCard>
        <img src={product.image} />

        <div>
          <span>{product.name}</span>
          <CartControlsContainer>
            <NumberInput onChange={handleUpdateItemAmount} value={amount} />
            <RemoveItemFromCartButton onClick={handleRemoveItemFromCart}>
              <Trash />
              <span>REMOVER</span>
            </RemoveItemFromCartButton>
          </CartControlsContainer>
        </div>

        <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
      </CartItemCard>

      <Separator />
    </>
  );
}
