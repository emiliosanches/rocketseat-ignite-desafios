import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { TextInput } from "../../../../components/TextInput";
import { RadioButtons } from "../RadioButtons";
import {
  AddressInputsGrid,
  DeliveryFormContainer,
  DeliveryFormFieldset,
  FieldsetLegend,
} from "./styles";

interface DeliveryFormProps {
  id: string;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export function DeliveryForm({ id, onSubmit }: DeliveryFormProps) {
  return (
    <DeliveryFormContainer onSubmit={onSubmit} id={id}>
      <DeliveryFormFieldset>
        <FieldsetLegend iconColor="yellow-dark">
          <MapPinLine />
          <div>
            <h3>Endereço de Entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FieldsetLegend>

        <AddressInputsGrid>
          <TextInput placeholder="CEP" name="zipcode" gridArea="zipcode" />
          <TextInput placeholder="Rua" name="street" gridArea="street" />
          <TextInput placeholder="Número" name="number" gridArea="number" />
          <TextInput
            placeholder="Complemento"
            name="complement"
            gridArea="complement"
            optional
          />
          <TextInput
            placeholder="Bairro"
            gridArea="neighborhood"
            name="neighborhood"
          />
          <TextInput placeholder="Cidade" gridArea="city" name="city" />
          <TextInput placeholder="UF" gridArea="state" name="state" />
        </AddressInputsGrid>
      </DeliveryFormFieldset>

      <DeliveryFormFieldset>
        <FieldsetLegend iconColor="purple">
          <CurrencyDollar />
          <div>
            <h3>Pagamento</h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </FieldsetLegend>

        <RadioButtons
          name="payment_method"
          options={[
            {
              value: "credit_card",
              labelIcon: <CreditCard />,
              labelText: "CARTÃO DE CRÉDITO",
            },
            {
              value: "debit_card",
              labelIcon: <Bank />,
              labelText: "CARTÃO DE DÉBITO",
            },
            {
              value: "money",
              labelIcon: <Money />,
              labelText: "DINHEIRO",
            },
          ]}
        />
      </DeliveryFormFieldset>
    </DeliveryFormContainer>
  );
}
