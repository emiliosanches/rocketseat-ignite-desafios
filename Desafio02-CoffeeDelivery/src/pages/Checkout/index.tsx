import {
  CartInfoCard,
  CheckoutContainer,
  DeliveryFormContainer,
  OrderButton,
  PriceInfoContainer,
  PriceItem,
  SectionTitle,
  TotalPrice,
} from "./styles";
import { DeliveryForm } from "./components/DeliveryForm";
import { FormProvider, useForm } from "react-hook-form";
import { CartListingItem } from "./components/CartListingItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { products } from "../../data/products-listing";

export function Checkout() {
  const { items } = useContext(CartContext);

  const checkoutForm = useForm({
    defaultValues: {
      zipcode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      payment_method: "",
    },
  });

  const totalItemsPrice = items.reduce((acc, item) => {
    return (
      acc +
      item.amount * products.find((product) => product.id === item.id)!.price
    );
  }, 0);

  function handleSubmitCheckoutForm(data: any) {
    console.log(data);
  }

  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <FormProvider {...checkoutForm}>
          <DeliveryForm
            id="checkout-form"
            onSubmit={handleSubmitCheckoutForm}
          />
        </FormProvider>
      </DeliveryFormContainer>

      <aside>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <CartInfoCard>
          {items.map((item) => (
            <CartListingItem key={item.id} id={item.id} amount={item.amount} />
          ))}

          <PriceInfoContainer>
            <PriceItem>
              Total de itens
              <span>R$ {totalItemsPrice.toFixed(2).replace(".", ",")}</span>
            </PriceItem>
            <PriceItem>
              Entrega <span>R$ 3,50</span>
            </PriceItem>
            <TotalPrice>
              Total
              <span>
                R$ {(totalItemsPrice + 3.5).toFixed(2).replace(".", ",")}
              </span>
            </TotalPrice>
          </PriceInfoContainer>

          <OrderButton type="submit" form="checkout-form">
            CONFIRMAR PEDIDO
          </OrderButton>
        </CartInfoCard>
      </aside>
    </CheckoutContainer>
  );
}
