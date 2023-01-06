import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "react-toastify";

import { DeliveryForm } from "./components/DeliveryForm";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { CartListingItem } from "./components/CartListingItem";
import { CartContext } from "../../contexts/CartContext";
import { products } from "../../data/products-listing";

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
import { useNavigate } from "react-router-dom";

const checkoutFormDataSchema = zod.object({
  zipcode: zod
    .string()
    .min(8, "O CEP deve ter entre 8 e 9 caracteres")
    .max(9, "O CEP deve ter entre 8 e 9 caracteres"),
  street: zod.string().min(5, "A rua deve ter no mínimo 5 caracteres"),
  number: zod.string().min(1, "Informe o número residencial"),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(4, "O bairro deve ter no mínimo 4 caracteres"),
  city: zod.string().min(3, "A cidade deve ter no mínimo 3 caracteres"),
  state: zod.string().length(2, "Informe a sigla de 2 caracteres do estado"),
  payment_method: zod.string({
    required_error: "Selecione um método de pagamento",
    invalid_type_error: "Selecione um método de pagamento",
  }),
});

type CheckoutFormData = zod.infer<typeof checkoutFormDataSchema>;

export function Checkout() {
  const { items, clearCart } = useContext(CartContext);

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormDataSchema),
  });

  const navigate = useNavigate();

  const totalItemsPrice = items.reduce((acc, item) => {
    return (
      acc +
      item.amount * products.find((product) => product.id === item.id)!.price
    );
  }, 0);

  function handleSubmitCheckoutForm(data: CheckoutFormData) {
    navigate("/success", {
      state: {
        address: {
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
        },
        payment_method: data.payment_method,
      },
    });

    clearCart();
  }

  function handleFormErrors(errors: FieldErrors<CheckoutFormData>) {
    const firstFieldWithError = (
      Object.keys(errors) as Array<keyof typeof errors>
    )[0];
    const firstFieldError = errors[firstFieldWithError]!.message;

    toast.error(firstFieldError);

    checkoutForm.setFocus(firstFieldWithError);
  }

  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <FormProvider {...checkoutForm}>
          <DeliveryForm
            id="checkout-form"
            onSubmit={checkoutForm.handleSubmit(
              handleSubmitCheckoutForm,
              handleFormErrors
            )}
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

          <OrderButton disabled={!items.length} type="submit" form="checkout-form">
            CONFIRMAR PEDIDO
          </OrderButton>
        </CartInfoCard>
      </aside>
    </CheckoutContainer>
  );
}
