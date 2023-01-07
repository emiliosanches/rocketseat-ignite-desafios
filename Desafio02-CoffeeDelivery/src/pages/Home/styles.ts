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
