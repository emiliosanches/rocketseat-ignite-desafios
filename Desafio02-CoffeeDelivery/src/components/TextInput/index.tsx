import { useFormContext } from "react-hook-form";
import { TextInputContainer } from "./styles";

interface TextInputProps {
  placeholder: string;
  name: string;
  gridArea?: string;
  optional?: boolean;
}

export function TextInput({ placeholder, name, optional, gridArea }: TextInputProps) {
  const { register } = useFormContext();

  return (
    <TextInputContainer gridArea={gridArea}>
      <input placeholder={placeholder} {...register(name)} />
      {optional ? <span>Opcional</span> : null}
    </TextInputContainer>
  );
}
