import styled, { css } from "styled-components";

interface TextInputContainerProps {
  gridArea?: string;
}

export const TextInputContainer = styled.div<TextInputContainerProps>`
  position: relative;
  ${(props) =>
    props.gridArea
      ? css`
          grid-area: ${props.gridArea};
        `
      : ""}

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

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }

  span {
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translateY(-50%);
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-label"]};
    font-style: italic;
  }

  input:not(:placeholder-shown),
  input:focus {
    & + span {
      display: none;
    }
  }
`;
