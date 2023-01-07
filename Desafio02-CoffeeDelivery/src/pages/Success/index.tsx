import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Location, useLocation } from "react-router-dom";

import deliveryIllustration from "../../assets/delivery-illustration.svg";

import {
  IconContainer,
  OrderInfoCard,
  OrderInfoLine,
  SuccessPageCardsContainer,
  SuccessPageContainer,
  SuccessPageSubtitle,
  SuccessPageTitle,
} from "./styles";

const paymentTypesLabels = {
  credit_card: "Cartão de Crédito",
  debit_card: "Cartão de Débito",
  money: "Dinheiro",
};

interface ILocation extends Location {
  state: {
    address: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
    };
    payment_method: "credit_card" | "debit_card" | "money";
  };
}

export function Success() {
  const { state } = useLocation() as ILocation;

  return (
    <SuccessPageContainer>
      <SuccessPageTitle>Uhu! Pedido confirmado</SuccessPageTitle>
      <SuccessPageSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </SuccessPageSubtitle>

      <SuccessPageCardsContainer>
        <OrderInfoCard>
          <OrderInfoLine>
            <IconContainer backgroundColor="purple">
              <MapPin weight="fill" />
            </IconContainer>
            <div>
              <div>
                Entrega em{" "}
                <strong>
                  {state.address.street}, {state.address.number}
                </strong>
              </div>
              <div>
                {state.address.neighborhood} - {state.address.city},{" "}
                {state.address.state}
              </div>
            </div>
          </OrderInfoLine>
          <OrderInfoLine>
            <IconContainer backgroundColor="yellow">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <div>Previsão de entrega</div>
              <div>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
          </OrderInfoLine>
          <OrderInfoLine>
            <IconContainer backgroundColor="yellow-dark">
              <CurrencyDollar weight="fill" />
            </IconContainer>
            <div>
              <div>Pagamento na entrega</div>
              <div>
                <strong>{paymentTypesLabels[state.payment_method]}</strong>
              </div>
            </div>
          </OrderInfoLine>
        </OrderInfoCard>

        <img
          src={deliveryIllustration}
          alt="Ilustração de um entregador de pedidos"
        />
      </SuccessPageCardsContainer>
    </SuccessPageContainer>
  );
}
