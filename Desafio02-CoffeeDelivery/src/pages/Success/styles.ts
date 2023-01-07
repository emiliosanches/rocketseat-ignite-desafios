import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const SuccessPageContainer = styled.main`
  padding: 5rem 10rem;
`;

export const SuccessPageTitle = styled.h1`
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SuccessPageSubtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SuccessPageCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6.375rem;

  margin-top: 2.5rem;
`;

export const OrderInfoCard = styled.div`
  border-radius: 6px 36px;
  border: 1px solid transparent;
  padding: 2.5rem;
  max-width: 32.875rem;
  flex: 1;
  position: relative;
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::after {
    content: "";
    border-radius: 7px 37px;
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme["yellow"]},
      ${(props) => props.theme["purple"]}
    );
    z-index: -1;
  }
`;

export const OrderInfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  backgroundColor: keyof typeof defaultTheme;
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${(props) => props.theme[props.backgroundColor]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
