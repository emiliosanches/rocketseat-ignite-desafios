import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer } from "../styles";

interface NumberInputProps {
  onChange: (value: number) => void;
  value: number;
}

export function NumberInput({ onChange, value }: NumberInputProps) {
  function handleReduceValue() {
    onChange(value - 1);
  }

  function handleIncreaseValue() {
    onChange(value + 1);
  }

  return (
    <AmountInputContainer>
      <button type="button" onClick={handleReduceValue} disabled={value === 1}>
        <Minus weight="bold" />
      </button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button type="button" onClick={handleIncreaseValue}>
        <Plus weight="bold" />
      </button>
    </AmountInputContainer>
  );
}
