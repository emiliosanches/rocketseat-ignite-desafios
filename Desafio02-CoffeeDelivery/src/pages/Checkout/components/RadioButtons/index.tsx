import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodButton, PaymentMethodSelectContainer } from "./styled";

interface RadioButtonsOption {
  value: string;
  labelIcon: React.ReactNode;
  labelText: string;
}

interface RadioButtonsProps {
  name: string;
  options: RadioButtonsOption[];
}

export function RadioButtons({ name, options }: RadioButtonsProps) {
  const { register } = useFormContext();

  return (
    <PaymentMethodSelectContainer>
      {options.map(({ value, labelIcon, labelText }) => (
        <PaymentMethodButton>
          <input
            type="radio"
            value={value}
            id={name + "_" + value}
            {...register(name)}
          />
          <label htmlFor={name + "_" + value}>
            {labelIcon}
            {labelText}
          </label>
        </PaymentMethodButton>
      ))}
    </PaymentMethodSelectContainer>
  );
}
