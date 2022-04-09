import React from "react";
import styled from "styled-components";
import { ESLightYellow } from "../Styles/colors";

const NavbarStyled = styled.div`
  background-color: ${ESLightYellow};
  margin-top: -10px;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
const Logo = styled.div`
  height: 75px;
  background-image: url("Assets/EvanSentLogo.svg");
  background-size: contain;
  background-position: right left;
  background-repeat: no-repeat;
`;

// const Logo = styled.div`
//   height: 95px;
//   background-image: url("Assets/EvanSent.png"), url("Assets/SkyRiso.png");
//   background-size: contain, cover;
//   background-position: right left, left right;
//   background-repeat: no-repeat, no-repeat;
// `;



export function Navbar() {
  return (
    <NavbarStyled>
      <Logo />
    </NavbarStyled>
  );
}
