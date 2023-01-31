import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { StyledContainer } from "../";
import logo from "../../assets/images/pokemon_logo.png";

const StyledLogo = styled.img`
  max-height: 100px;
`;

export const Layout = () => {
  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="Pokemon Logo" />
      <Outlet />
    </StyledContainer>
  );
};
