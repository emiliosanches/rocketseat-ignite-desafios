import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RadioButtons } from "../RadioButtons";
import {
  AddressInputsGrid,
  DeliveryFormContainer,
  DeliveryFormFieldset,
  FieldsetLegend,
  TextInputContainer,
} from "./styles";

interface DeliveryFormProps {
  id: string;
  onSubmit: (value: any) => void;
}

export function DeliveryForm({ id, onSubmit }: DeliveryFormProps) {
  const { handleSubmit, register } = useFormContext();

  return (
    <DeliveryFormContainer onSubmit={handleSubmit(onSubmit)} id={id}>
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
            <input placeholder="CEP" {...register("zipcode")} />
          </TextInputContainer>
          <TextInputContainer id="street">
            <input placeholder="Rua" {...register("street")} />
          </TextInputContainer>
          <TextInputContainer id="number">
            <input placeholder="Número" {...register("number")} />
          </TextInputContainer>
          <TextInputContainer id="complement">
            <input placeholder="Complemento" {...register("complement")} />
          </TextInputContainer>
          <TextInputContainer id="neighborhood">
            <input placeholder="Bairro" {...register("neighborhood")} />
          </TextInputContainer>
          <TextInputContainer id="city">
            <input placeholder="Cidade" {...register("city")} />
          </TextInputContainer>
          <TextInputContainer id="state">
            <input placeholder="UF" {...register("uf")} />
          </TextInputContainer>
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
          name="payment_options"
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
