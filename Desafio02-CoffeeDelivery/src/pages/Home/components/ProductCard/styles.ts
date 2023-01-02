import styled from "styled-components";

export const ProductCardContainer = styled.div`
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

export const AddProductToCartForm = styled.form`
  display: flex;
  gap: 8px;
`;

export const AddToCardButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    height: 1.375rem;
    width: 1.375rem;
  }
`;
