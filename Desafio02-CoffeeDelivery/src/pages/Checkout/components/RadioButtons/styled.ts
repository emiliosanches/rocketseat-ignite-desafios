import styled from "styled-components";

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
