import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";

import { HeaderContainer, Location, CheckoutButton } from "./styles";

export function Header() {
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

        <CheckoutButton to="/checkout">
          <ShoppingCart weight="fill" />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  );
}
