import { Trash } from "phosphor-react";
import { NumberInput } from "../../../../components/NumberInput/Controlled";
import espressoImage from "../../../../assets/products-images/Expresso Tradicional.png";

import {
  CartControlsContainer,
  CartItemCard,
  RemoveItemFromCartButton,
  Separator,
} from "./styles";

export function CartListingItem() {
  return (
    <>
      <CartItemCard>
        <img src={espressoImage} />

        <div>
          <span>Expresso tradicional</span>
          <CartControlsContainer>
            <NumberInput onChange={() => {}} value={1} />
            <RemoveItemFromCartButton>
              <Trash />
              <span>REMOVER</span>
            </RemoveItemFromCartButton>
          </CartControlsContainer>
        </div>

        <span>R$ 9,90</span>
      </CartItemCard>

      <Separator />
    </>
  );
}
