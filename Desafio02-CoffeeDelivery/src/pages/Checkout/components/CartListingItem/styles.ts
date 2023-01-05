import styled from "styled-components";

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
