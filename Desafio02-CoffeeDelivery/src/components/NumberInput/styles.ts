import styled from "styled-components";

export const AmountInputContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  align-items: center;
  padding: 0.25rem;

  input {
    width: 1.25rem;
    border: none;
    background: transparent;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    background: none;
    border: none;
    margin: 0 0.25rem 0 0.5rem;
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
