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

export function Checkout() {
  const checkoutForm = useForm({
    defaultValues: {
      zipcode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      payment_method: ""
    },
  });

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
          <CartListingItem />
          <CartListingItem />

          <PriceInfoContainer>
            <PriceItem>
              Total de itens <span>R$ 29,70</span>
            </PriceItem>
            <PriceItem>
              Entrega <span>R$ 3,50</span>
            </PriceItem>
            <TotalPrice>
              Total <span>R$ 33,20</span>
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
