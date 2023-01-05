import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const CheckoutContainer = styled.main`
  padding: 2.5rem 10rem;
  display: flex;
  gap: 2rem;
`;

export const SectionTitle = styled.h4`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", cursive;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const DeliveryFormContainer = styled.section`
  flex: 1;
`;

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DeliveryFormFieldset = styled.fieldset`
  border: none;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface FieldsetLegendProps {
  iconColor: keyof typeof defaultTheme;
}

export const FieldsetLegend = styled.legend<FieldsetLegendProps>`
  float: left;
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[props.iconColor]};
    width: 1.375rem;
    height: 1.375rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h3 {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 400;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const AddressInputsGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem minmax(12.5rem, 1fr) 3.75rem;
  grid-template-rows: repeat(4, 2.625rem);
  grid-gap: 1rem 0.75rem;
  grid-template-areas:
    "zipcode      n          n"
    "street       street     street"
    "number       complement complement"
    "neighborhood city       state";

  #zipcode {
    grid-area: zipcode;
  }

  #street {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #neighborhood {
    grid-area: neighborhood;
  }

  #city {
    grid-area: city;
  }

  #state {
    grid-area: state;
  }
`;

export const TextInputContainer = styled.div`
  input {
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    padding: 0.75rem;
    position: relative;
    border-radius: 4px;
    width: 100%;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};

    &:focus {
      outline: 1px solid ${(props) => props.theme["yellow-dark"]};
    }

    &::after {
      content: "Opcional";
      display: block;
      position: absolute;
      right: 0.75rem;
      top: 0.75rem;
    }

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const PaymentMethodSelectContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PaymentMethodButton = styled.div`
  flex: 1;
  position: relative;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};
  height: 3.25rem;
  cursor: pointer;
  z-index: 0;
  user-select: none;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  label {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 0.75rem;
    z-index: 20;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
      width: 1rem;
      height: 1rem;
      margin-right: 0.75rem;
    }
  }

  input {
    appearance: none;
    background-color: none;
    margin: 0;

    &:checked + label {
      border: 1px solid ${(props) => props.theme["purple"]};
      background: ${(props) => props.theme["purple-light"]};
    }
  }
`;

export const CartInfoCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 2.5rem;
  width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItemCard = styled.div`
  padding: 0.5rem 0.25rem;

  display: flex;
  align-items: flex-start;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
    }
  }

  & > span {
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
    line-height: 1.3;
  }
`;

export const CartControlsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const RemoveItemFromCartButton = styled.button`
  border: none;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
  }

  &:hover {
    color: ${(props) => props.theme["base-subtitle"]};
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const Separator = styled.div`
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-size: 1rem;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 700;
`;

export const OrderButton = styled.button`
  border: none;
  background: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
