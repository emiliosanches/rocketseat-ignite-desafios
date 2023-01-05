import { Minus, Plus } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { AmountInputContainer } from "../styles";

interface NumberInputProps {
  name: string;
}

export function NumberInput({ name }: NumberInputProps) {
  const { register, setValue, getValues, watch } = useFormContext();

  const value = watch(name);

  function handleReduceValue() {
    setValue(name, value - 1);
  }

  function handleIncreaseValue() {
    setValue(name, value + 1);
  }

  return (
    <AmountInputContainer>
      <button type="button" onClick={handleReduceValue} disabled={value === 1}>
        <Minus weight="bold" />
      </button>
      <input
        type="number"
        min={1}
        {...register(name, {
          valueAsNumber: true,
        })}
      />
      <button type="button" onClick={handleIncreaseValue}>
        <Plus weight="bold" />
      </button>
    </AmountInputContainer>
  );
}
