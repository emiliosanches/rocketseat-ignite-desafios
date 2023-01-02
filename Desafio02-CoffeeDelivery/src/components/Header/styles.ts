import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

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

export const CheckoutButton = styled(NavLink)`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px;
  padding: 0.625rem;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;
