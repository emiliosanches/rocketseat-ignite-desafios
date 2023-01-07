import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";

export const DeliveryFormContainer = styled.form`
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
