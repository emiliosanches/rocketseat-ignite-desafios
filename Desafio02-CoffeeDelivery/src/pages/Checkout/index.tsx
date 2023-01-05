import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { NumberInput } from "../../components/NumberInput/Controlled";
import espressoImage from "../../assets/products-images/Expresso Tradicional.png";
import latteImage from "../../assets/products-images/Latte.png";

import {
  AddressInputsGrid,
  CartControlsContainer,
  CartInfoCard,
  CartItemCard,
  CheckoutContainer,
  DeliveryFormFieldset,
  DeliveryFormContainer,
  FieldsetLegend,
  OrderButton,
  PriceInfoContainer,
  PriceItem,
  RemoveItemFromCartButton,
  SectionTitle,
  Separator,
  TextInputContainer,
  TotalPrice,
  DeliveryForm,
  PaymentMethodSelectContainer,
  PaymentMethodButton,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <DeliveryForm>
          <DeliveryFormFieldset>
            <FieldsetLegend iconColor="yellow-dark">
              <MapPinLine />
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FieldsetLegend>

            <AddressInputsGrid>
              <TextInputContainer id="zipcode">
                <input placeholder="CEP" />
              </TextInputContainer>
              <TextInputContainer id="street">
                <input placeholder="Rua" />
              </TextInputContainer>
              <TextInputContainer id="number">
                <input placeholder="Número" />
              </TextInputContainer>
              <TextInputContainer id="complement">
                <input placeholder="Complemento" />
              </TextInputContainer>
              <TextInputContainer id="neighborhood">
                <input placeholder="Bairro" />
              </TextInputContainer>
              <TextInputContainer id="city">
                <input placeholder="Cidade" />
              </TextInputContainer>
              <TextInputContainer id="state">
                <input placeholder="UF" />
              </TextInputContainer>
            </AddressInputsGrid>
          </DeliveryFormFieldset>

          <DeliveryFormFieldset>
            <FieldsetLegend iconColor="purple">
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </FieldsetLegend>

            <PaymentMethodSelectContainer>
              <PaymentMethodButton>
                <input
                  type="radio"
                  name="payment_method"
                  value="credit_card"
                  id="payment_credit_card"
                />
                <label htmlFor="payment_credit_card">
                  <CreditCard />
                  CARTÃO DE CRÉDITO
                </label>
              </PaymentMethodButton>
              <PaymentMethodButton>
                <input
                  type="radio"
                  name="payment_method"
                  value="debit_card"
                  id="payment_debit_card"
                />
                <label htmlFor="payment_debit_card">
                  <Bank />
                  CARTÃO DE DÉBITO
                </label>
              </PaymentMethodButton>
              <PaymentMethodButton>
                <input
                  type="radio"
                  name="payment_method"
                  value="money"
                  id="payment_money"
                />
                <label htmlFor="payment_money">
                  <Money />
                  DINHEIRO
                </label>
              </PaymentMethodButton>
            </PaymentMethodSelectContainer>
          </DeliveryFormFieldset>
        </DeliveryForm>
      </DeliveryFormContainer>

      <aside>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <CartInfoCard>
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

          <CartItemCard>
            <img src={latteImage} />

            <div>
              <span>Latte</span>
              <CartControlsContainer>
                <NumberInput onChange={() => {}} value={1} />
                <RemoveItemFromCartButton>
                  <Trash />
                  <span>REMOVER</span>
                </RemoveItemFromCartButton>
              </CartControlsContainer>
            </div>

            <span>R$ 19,80</span>
          </CartItemCard>

          <Separator />

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

          <OrderButton>CONFIRMAR PEDIDO</OrderButton>
        </CartInfoCard>
      </aside>
    </CheckoutContainer>
  );
}
