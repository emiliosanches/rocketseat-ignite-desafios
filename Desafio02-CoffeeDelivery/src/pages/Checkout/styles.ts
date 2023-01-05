import styled from "styled-components";

export const CheckoutContainer = styled.main`
  padding: 2.5rem 10rem;
  display: flex;
  gap: 2rem;
`;

export const SectionTitle = styled.h4`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", cursive;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const DeliveryFormContainer = styled.section`
  flex: 1;
`;

export const CartInfoCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 2.5rem;
  width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-size: 1rem;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 700;
`;

export const OrderButton = styled.button`
  border: none;
  background: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
