import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";

import { HeaderContainer, Location, CheckoutButton } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { items } = useContext(CartContext);

  const itemsAmountInCart = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>

      <div>
        <Location>
          <MapPin weight="fill" />
          Adamantina, SP
        </Location>

        <CheckoutButton amountInCart={itemsAmountInCart} to="/checkout">
          <ShoppingCart weight="fill" />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  );
}
