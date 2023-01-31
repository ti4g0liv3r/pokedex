import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { StyledContainer } from "../";
import logo from "../../assets/images/pokemon_logo.png";

const StyledLogo = styled.img`
  max-height: 100px;
  margin: 10px;
  ${({ theme }) => theme.query.xs`
      max-height: 80px;
   `}
`;

const LogoWrapper = styled.div`
  height: ${({ theme }) => `${theme.logoContainerHeight}px`};
`;

export const Layout = () => {
  return (
    <StyledContainer>
      <LogoWrapper>
        <StyledLogo src={logo} alt="Pokemon Logo" />
      </LogoWrapper>
      <Outlet />
    </StyledContainer>
  );
};
