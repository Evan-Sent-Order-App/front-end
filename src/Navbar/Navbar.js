import React from "react";
import styled from "styled-components";
import { ESLightYellow } from "../Styles/colors";

const NavbarStyled = styled.div`
  background-color: ${ESLightYellow};
  padding: 15px;
  margin-top: 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const Logo = styled.div`
  height: 50px;
  background-image: url("Assets/EvanSent.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo />
    </NavbarStyled>
  );
}
