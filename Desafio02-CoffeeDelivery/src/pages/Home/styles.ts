import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";
import heroBackground from "../../assets/hero-background.svg";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  background: url(${heroBackground});
  padding: 5.75rem 10rem;
`;

export const Presentation = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 342px;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", cursive;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme["base-title"]};
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1.3;
  margin-top: 1rem;
  display: block;
`;

export const ItemsContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

interface ItemProps {
  color: keyof typeof defaultTheme;
}

export const Item = styled.li<ItemProps>`
  flex: 1;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0.5rem;

    background: ${(props) => props.theme[props.color]};
    border-radius: 999px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;

export const ProductsListSection = styled.section`
  padding: 2rem 10rem;

  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));
  grid-gap: 2rem;
  justify-content: center;
`;

export const ProductCard = styled.div`
  margin-top: 3.375rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.5rem;
  width: 16rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -2.5rem;
  }
`;

export const ProductTag = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  margin: 1rem;

  font-size: 0.625rem;
  font-weight: 700;
`;

export const ProductName = styled.h2`
  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ProductDescription = styled.span`
  margin-top: 0.5rem;
  line-height: 1.3;

  color: ${(props) => props.theme["base-label"]};
  font-size: 0.875rem;
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const PriceContainer = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
  }
`;

export const OrderButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const AmountInputContainer = styled.div`
  width: 1.25rem;
  background: ${(props) => props.theme["base-button"]};

  input {
    width: 1.25rem;
    height: 100%;
    border: none;
    background: transparent;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const AddToCardButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;
