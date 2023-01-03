import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};
  position: sticky;
  top: 0px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Location = styled.div`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  padding: 0.625rem;
  font-size: 0.875rem;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  user-select: none;
  cursor: pointer;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;

interface CheckoutButtonProps {
  amountInCart: number;
}

export const CheckoutButton = styled(NavLink)<CheckoutButtonProps>`
  position: relative;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px;
  padding: 0.625rem;

  display: flex;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }

  ${(props) =>
    props.amountInCart
      ? css`
          &::after {
            content: "${props.amountInCart}";
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(50%, -50%);
            background: ${(props) => props.theme["yellow-dark"]};
            color: ${(props) => props.theme.white};
            height: 1.25rem;
            width: 1.25rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 700;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `
      : ""}
`;
